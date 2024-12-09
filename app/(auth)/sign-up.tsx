import { z } from "zod";
import { useState } from "react";
import { router } from "expo-router";
import { useAuthStore } from "@/store/authStore";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/schemas/auth.schemas";
import { SignUpButtons } from "@/components/sign-up-btn";
import { CustomTextInput } from "@/components/text-input";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

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
    <SafeAreaView className="flex h-full bg-[#FDF6E6]">
      <ScrollView className="flex-1">
        <View className="gap-8 w-full max-w-sm mx-auto">
          <View className="w-full max-w-md mx-auto mt-8">
            <Text className="font-helvetica-bold text-3xl">Create Account</Text>
            <Text className="font-helvetica-medium text-xl text-gray-500">
              Start planning your perfect trip.
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

          <View className="flex flex-col gap-8">
            <TouchableOpacity
              className="w-full bg-blue-900 py-4 rounded-[24px]"
              onPress={handleSubmit(onSubmit)}
              disabled={loading}
            >
              <Text className="font-helvetica-regular text-lg text-white text-center">
                Create Account
              </Text>
            </TouchableOpacity>
            <Text className="text-gray-500 font-helvetica-regular text-center text-lg">
              Or using other method
            </Text>
            <SignUpButtons />
          </View>

          <View>
            <Text className="text-gray-500 font-helvetica-regular text-center text-lg">
              Already have an account?{" "}
              <Text
                className="text-blue-900 font-helvetica-bold text-lg"
                onPress={() => router.push("/(auth)/sign-in")}
              >
                Sign In
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
