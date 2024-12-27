import { z } from "zod";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { OtpInput } from "react-native-otp-entry";
import React, { useEffect, useState } from "react";
import { useAuthStore } from "@/src/store/authStore";
import { AuthApiError } from "@supabase/supabase-js";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { MyModal } from "@/src/components/modal/Modal";
import { BrandLogo } from "@/src/components/logo/Logo";
import { View, Text, TouchableOpacity } from "react-native";
import { Headline } from "@/src/components/headline/Headline";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppButton } from "@/src/components/buttons/AppButton";
import { verifyOTPSchema } from "@/src/utils/schemas/auth.schemas";
import { styles } from "@/src/styles/screens/VerifyOtpScreen.styles";

const VerifyOTPScreen = () => {
  const [loading, setLoading] = useState(false);
  const { userEmail, verifyOTP, resendOTP } = useAuthStore((state) => state);

  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const {
    control,
    handleSubmit,
    setError,
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
    } catch (error: AuthApiError | any) {
      setError("otp", {
        type: "manual",
        message: error?.message || "Invalid OTP",
      });
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
    <SafeAreaView style={styles.wrapper}>
      <MyModal
        isDialog
        modalOpen={modalVisible}
        setModalOpen={setModalVisible}
        disableOutsideClick
      >
        <View style={styles.modalContent}>
          <Ionicons name="checkmark-circle" size={48} color="green" />
          <Headline
            title="Successfully Verified"
            description="Your account has been successfully verified.
"
          />
          <AppButton
            title="Sign In Now"
            onPress={() => router.replace("/(auth)/sign-in")}
          />
        </View>
      </MyModal>
      <View style={styles.container}>
        <BrandLogo />
        <Headline
          title="Verify Your Email Address"
          description={"Enter the code sent to\n"}
          boldText={userEmail || "ante.bucan.st@gmail.com"}
          isBold
        />

        <View style={styles.content}>
          <View>
            <Text style={{ color: "gray", textAlign: "center" }}>
              6 Digit OTP Code
            </Text>
            <Controller
              control={control}
              name="otp"
              render={({ field: { onChange } }) => (
                <OtpInput
                  type="numeric"
                  numberOfDigits={6}
                  onTextChange={onChange}
                  theme={{
                    pinCodeContainerStyle: {
                      width: 52,
                      borderTopWidth: 0,
                      borderBottomWidth: 1,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderRadius: 0,
                    },
                  }}
                />
              )}
            />
            {errors.otp && (
              <Text style={styles.error}>{errors.otp.message}</Text>
            )}
          </View>
          <View style={styles.footer}>
            <AppButton
              title="Verify Code"
              onPress={handleSubmit(onSubmit)}
              isLoading={loading}
              disabled={loading || !userEmail}
            />

            <TouchableOpacity
              onPress={handleResendOTP}
              disabled={loading || !canResend || !userEmail}
              style={{
                opacity: !canResend ? 0.5 : 1,
              }}
            >
              <Text style={styles.resendText}>
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
