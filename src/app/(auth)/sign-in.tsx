import { z } from "zod";
import { useState } from "react";
import { router } from "expo-router";
import { useAuthStore } from "@/src/store/authStore";
import { BrandLogo } from "@/src/components/logo/Logo";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/src/utils/schemas/auth.schemas";
import { styles } from "@/src/styles/screens/AuthScreen.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { SignUpButtons } from "@/src/components/signUpBtn/SignUpBtn";
import { CustomTextInput } from "@/src/components/textInput/TextInput";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { Headline } from "@/src/components/headline/Headline";
import { AppButton } from "@/src/components/buttons/AppButton";
import { useHeaderHeight } from "@react-navigation/elements";

const SignInScreen = () => {
  const signIn = useAuthStore((state) => state.signIn);
  const headerHeight = useHeaderHeight();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const password = watch("password");

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    try {
      setLoading(true);
      await signIn(values.email, values.password);
      router.replace("/(tabs)");
    } catch (error) {
      console.error("Error signing in", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={[styles.safeContainer, { paddingTop: headerHeight }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <BrandLogo />
            <Headline
              title="Welcome back 👋 "
              description="Please enter your email and password."
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

              <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.alternativeContainer}>
              <AppButton
                title="Sign In"
                onPress={handleSubmit(onSubmit)}
                disabled={loading}
              />
              <Text style={styles.alternativeText}>Or using other method</Text>
              <SignUpButtons />
            </View>
          </View>

          <View>
            <Text style={styles.alternativeText}>
              Don't have an account?{" "}
              <Text
                style={styles.signText}
                onPress={() => router.push("/(auth)/sign-up")}
              >
                Sign Up
              </Text>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignInScreen;
