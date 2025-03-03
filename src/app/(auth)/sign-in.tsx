import { z } from "zod";
import { useState } from "react";
import { router } from "expo-router";
import { useAuthStore } from "@/src/store/authStore";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BrandLogo } from "@/src/components/logo/Logo";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/src/styles/screens/AuthScreen.styles";
import { signInSchema } from "@/src/utils/schemas/auth.schemas";
import { SignUpButtons } from "@/src/components/signUpBtn/SignUpBtn";
import { CustomTextInput } from "@/src/components/textInput/TextInput";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { AuthApiError } from "@supabase/supabase-js";
import { Headline } from "@/src/components/headline/Headline";
import { AppButton } from "@/src/components/buttons/AppButton";

const SignInScreen = () => {
  const signIn = useAuthStore((state) => state.signIn);
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
    watch,
  } = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  watch("password");

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    try {
      setLoading(true);
      await signIn(values.email, values.password);
      router.replace("/(tabs)");
    } catch (error: AuthApiError | any) {
      setError("root", {
        type: "manual",
        message: error?.message || "Invalid email or password",
      });
      console.error("Error signing in", error);
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

              <TouchableOpacity
                onPress={() => router.push("/(auth)/reset-password")}
              >
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.section}>
              <AppButton
                title="Sign In"
                onPress={handleSubmit(onSubmit)}
                isLoading={loading}
                disabled={loading}
              />
              {errors.root && (
                <Text style={styles.error}>{errors.root.message}</Text>
              )}
              <Text style={styles.text}>Or using other method</Text>
              <SignUpButtons />
            </View>
          </View>

          <View>
            <Text style={styles.text}>
              Don't have an account?{" "}
              <Text
                style={styles.link}
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
