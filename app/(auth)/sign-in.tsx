import { z } from "zod";
import { useState } from "react";
import { router } from "expo-router";
import { useAuthStore } from "@/store/authStore";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/schemas/auth.schemas";
import { SignUpButtons } from "@/components/sign-up-btn";
import { CustomTextInput } from "@/components/text-input";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const SignInScreen = () => {
  const signIn = useAuthStore((state) => state.signIn);
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
    <SafeAreaView className="flex h-full bg-[#FDF6E6]">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView className="flex-1 px-6">
          <View className="gap-8 w-full mx-auto">
            <View className="w-full mx-auto mt-8">
              <Text className="font-helvetica-bold text-3xl">Sign In</Text>
              <Text className="font-helvetica-regular text-xl text-gray-500">
                Please enter your email and password.
              </Text>
            </View>

            <View className="gap-4">
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

              <TouchableOpacity>
                <Text className="text-blue-900 font-helvetica-medium text-base text-right">
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>

            <View className="flex flex-col gap-8">
              <TouchableOpacity
                className="w-full bg-blue-900 py-4 rounded-[24px]"
                onPress={handleSubmit(onSubmit)}
                disabled={loading}
              >
                <Text className="font-helvetica-regular text-lg text-white text-center">
                  Sign In
                </Text>
              </TouchableOpacity>
              <Text className="text-gray-500 font-helvetica-regular text-center text-lg">
                Or using other method
              </Text>
              <SignUpButtons isSignIn />
            </View>

            <View>
              <Text className="text-gray-500 font-helvetica-regular text-center text-lg">
                Don't have an account?{" "}
                <Text
                  className="text-blue-900 font-helvetica-bold text-lg"
                  onPress={() => router.push("/(auth)/sign-up")}
                >
                  Sign Up
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignInScreen;
