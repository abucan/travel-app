import { z } from "zod";
import { router } from "expo-router";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useAuthStore } from "@/store/authStore";
import { OtpInput } from "react-native-otp-entry";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { verifyOTPSchema } from "@/schemas/auth.schemas";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

const VerifyOTPScreen = () => {
  const [loading, setLoading] = useState(false);
  const { userEmail, verifyOTP, resendOTP } = useAuthStore((state) => state);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof verifyOTPSchema>>({
    resolver: zodResolver(verifyOTPSchema),
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof verifyOTPSchema>) => {
    try {
      setLoading(true);
      await verifyOTP(values.otp);
      router.replace("/(tabs)");
    } catch (error) {
      console.error("Error verifying OTP", error);
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    try {
      setLoading(true);
      await resendOTP();
    } catch (error) {
      console.error("Error resending OTP", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex h-full bg-[#FDF6E6]">
      <View className="flex-1 flex-col w-full max-w-sm mx-auto">
        <View className="items-center gap-8">
          <View className="bg-blue-900/20 w-32 h-32 rounded-full flex items-center justify-center">
            <View className="bg-blue-900 w-24 h-24 rounded-full flex items-center justify-center">
              <Ionicons name={"mail"} size={32} color="white" />
            </View>
          </View>

          <View className="w-full max-w-md mx-auto flex flex-col items-center">
            <Text className="font-helvetica-bold text-3xl">
              Verification Code
            </Text>
            <Text className="font-helvetica-medium text-xl text-gray-500 text-center">
              We have sent the verification code to {userEmail || ""}.
            </Text>
          </View>

          <Controller
            control={control}
            name="otp"
            render={({ field: { onChange } }) => (
              <OtpInput numberOfDigits={6} onTextChange={onChange} />
            )}
          />

          {errors.otp && (
            <Text className="text-red-500 text-sm">{errors.otp.message}</Text>
          )}

          <TouchableOpacity
            className="w-full bg-blue-900 py-4 rounded-[24px]"
            onPress={handleSubmit(onSubmit)}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text className="font-helvetica-regular text-lg text-white text-center">
                Verify Code
              </Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleResendOTP}
            disabled={loading}
            className="mt-4"
          >
            <Text className="font-helvetica-medium text-blue-900">
              Resend Code
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerifyOTPScreen;
