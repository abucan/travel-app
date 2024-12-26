import { z } from "zod";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { OtpInput } from "react-native-otp-entry";
import React, { useEffect, useState } from "react";
import { useAuthStore } from "@/src/store/authStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { MyModal } from "@/src/components/modal/Modal";
import { Headline } from "@/src/components/headline/Headline";
import { SafeAreaView } from "react-native-safe-area-context";
import { verifyOTPSchema } from "@/src/utils/schemas/auth.schemas";
import { styles } from "@/src/styles/screens/VerifyOtpScreen.styles";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { AppButton } from "@/src/components/buttons/AppButton";

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
    <SafeAreaView style={styles.safeContainer}>
      <MyModal
        modalOpen={modalVisible}
        setModalOpen={setModalVisible}
        disableOutsideClick
      >
        <View style={styles.body}>
          <View style={styles.iconOuterCircle}>
            <View style={styles.iconInnerCircle}>
              <Ionicons name={"checkmark"} size={32} color="white" />
            </View>
          </View>
          <Headline
            title="Successfully Verified"
            description="Your account has been successfully verified.
"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              router.replace("/(tabs)");
            }}
          >
            <Text style={styles.buttonText}>Go to Homepage</Text>
          </TouchableOpacity>
        </View>
      </MyModal>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Headline
            title="Verification Code"
            description={`We have sent the verification code to ${
              userEmail || ""
            }.`}
            position="left"
          />
          <Controller
            control={control}
            name="otp"
            render={({ field: { onChange } }) => (
              <OtpInput
                type="numeric"
                numberOfDigits={6}
                onTextChange={onChange}
              />
            )}
          />
        </View>

        {errors.otp && (
          <Text style={styles.errorMsg}>{errors.otp.message}</Text>
        )}

        <View style={styles.btnContainer}>
          <AppButton
            title="Verify Code"
            onPress={handleSubmit(onSubmit)}
            disabled={loading || !userEmail}
          />

          <TouchableOpacity
            onPress={handleResendOTP}
            disabled={loading || !canResend || !userEmail}
            style={{
              opacity: !canResend ? 0.5 : 1,
            }}
          >
            <Text style={styles.resendBtnText}>
              {canResend ? "Resend Code" : `Resend Code (${timer}s)`}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerifyOTPScreen;
