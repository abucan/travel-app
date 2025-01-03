import { z } from "zod";
import { useState } from "react";
import { router } from "expo-router";
import { useAuthStore } from "@/src/store/authStore";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/src/styles/screens/AuthScreen.styles";
import { signUpSchema } from "@/src/utils/schemas/auth.schemas";
import { SignUpButtons } from "@/src/components/signUpBtn/SignUpBtn";
import { CustomTextInput } from "@/src/components/textInput/TextInput";
import { View, Text, KeyboardAvoidingView, Platform } from "react-native";

import { Headline } from "@/src/components/headline/Headline";
import { AppButton } from "@/src/components/buttons/AppButton";

import { BrandLogo } from "@/src/components/logo/Logo";

const SignUpScreen = () => {
  const signUp = useAuthStore((state) => state.signUp);
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  watch("password");

  const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
    try {
      setLoading(true);
      await signUp(values.email, values.password);
      router.replace("/(auth)/verify-otp");
    } catch (error) {
      console.error("Error signing up", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <View style={styles.form}>
            <BrandLogo />
            <Headline
              title="Create Account"
              description="Start planning your perfect trip."
            />

            <View style={{ gap: 16 }}>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value } }) => (
                  <CustomTextInput
                    placeholder="Email"
                    secureTextEntry={false}
                    icon="mail"
                    onChangeText={onChange}
                    value={value}
                    error={errors.email?.message}
                  />
                )}
              />

              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value } }) => (
                  <CustomTextInput
                    placeholder="Password"
                    secureTextEntry={true}
                    icon="lock-closed"
                    onChangeText={onChange}
                    value={value}
                    error={errors.password?.message}
                  />
                )}
              />

              <Controller
                control={control}
                name="confirmPassword"
                render={({ field: { onChange, value } }) => (
                  <CustomTextInput
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    icon="lock-closed"
                    onChangeText={onChange}
                    value={value}
                    error={errors.confirmPassword?.message}
                  />
                )}
              />
            </View>

            <View style={styles.section}>
              <AppButton
                title="Sign Up"
                onPress={handleSubmit(onSubmit)}
                isLoading={loading}
                disabled={loading}
              />
              <Text style={styles.text}>Or using other method</Text>
              <SignUpButtons />
            </View>
          </View>

          <View>
            <Text style={styles.text}>
              Already have an account?{" "}
              <Text
                style={styles.link}
                onPress={() => router.push("/(auth)/sign-in")}
              >
                Sign In
              </Text>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
