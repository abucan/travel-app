import { set, z } from "zod";
import { router } from "expo-router";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import { useAuthStore } from "@/store/authStore";
import { OtpInput } from "react-native-otp-entry";
import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { verifyOTPSchema } from "@/schemas/auth.schemas";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

const VerifyOTPScreen = () => {
  const [loading, setLoading] = useState(false);
  const { userEmail, verifyOTP, resendOTP } = useAuthStore((state) => state);

  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

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
      setModalVisible(true);
    } catch (error) {
      console.error("Error verifying OTP", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer]);

  const handleResendOTP = async () => {
    if (!canResend) return;
    setTimer(60);
    setCanResend(false);

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
      <Modal isVisible={modalVisible}>
        <View className="flex-col w-full h-fit rounded-[12px] p-6 mx-auto justify-center items-center bg-[#FDF6E6]">
          <View className="items-center gap-8">
            <View className="bg-blue-900/20 w-32 h-32 rounded-full flex items-center justify-center">
              <View className="bg-blue-900 w-24 h-24 rounded-full flex items-center justify-center">
                <Ionicons name={"checkmark"} size={32} color="white" />
              </View>
            </View>

            <View className="w-full mx-auto flex flex-col items-center">
              <Text className="font-helvetica-bold text-3xl">
                Successfully Verified
              </Text>
              <Text className="font-helvetica-medium text-xl text-gray-500 text-center">
                Your account has been successfully verified.
              </Text>
            </View>

            <TouchableOpacity
              className="w-full bg-blue-900 py-4 rounded-[24px]"
              onPress={() => {
                router.replace("/(tabs)");
              }}
            >
              <Text className="font-helvetica-regular text-lg text-white text-center">
                Go to Homepage
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View className="flex-1 flex-col w-full p-6 mx-auto justify-center">
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

          <View className="flex flex-col items-center gap-4">
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
              disabled={loading || !canResend}
              className={`mt-4 ${!canResend ? "opacity-50" : ""}`}
            >
              <Text className="font-helvetica-medium text-blue-900">
                {canResend ? "Resend Code" : `Resend Code (${timer}s)`}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerifyOTPScreen;
