import { z } from "zod";
import { useState } from "react";
import { router } from "expo-router";
import { useAuthStore } from "@/store/authStore";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/schemas/auth.schemas";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/styles/screens/authentication.styles";
import { SignUpButtons } from "@/components/SignUpBtn/SignUpBtn";
import { CustomTextInput } from "@/components/TextInput/TextInput";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";

import Logo from "@/assets/tripster.svg";

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

  const password = watch("password");

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
    <SafeAreaView style={styles.safeContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <Image
              source={require("@/assets/tripster.png")}
              style={{
                width: 300,
                height: 70,
                alignSelf: "center",
              }}
            />
            <View style={styles.textContainer}>
              <Text style={styles.headerText}>Create Account</Text>
              <Text style={styles.descriptionText}>
                Start planning your perfect trip.
              </Text>
            </View>

            <View style={{ gap: 16 }}>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value } }) => (
                  <CustomTextInput
                    placeholder="Email"
                    secureTextEntry={false}
                    icon="mail"
                    label="Email"
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
                    label="Password"
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
                    label="Confirm Password"
                    onChangeText={onChange}
                    value={value}
                    error={errors.confirmPassword?.message}
                  />
                )}
              />
            </View>

            <View style={styles.alternativeContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit(onSubmit)}
                disabled={loading}
              >
                <Text style={styles.buttonText}>Create Account</Text>
              </TouchableOpacity>
              <Text style={styles.alternativeText}>Or using other method</Text>
              <SignUpButtons />
            </View>

            <View>
              <Text style={styles.alternativeText}>
                Already have an account?{" "}
                <Text
                  style={styles.signText}
                  onPress={() => router.push("/(auth)/sign-in")}
                >
                  Sign In
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
