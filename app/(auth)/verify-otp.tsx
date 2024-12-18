import { z } from "zod";
import { router } from "expo-router";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import { useAuthStore } from "@/store/authStore";
import { OtpInput } from "react-native-otp-entry";
import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { verifyOTPSchema } from "@/schemas/auth.schemas";
import { Headline } from "@/components/headline/Headline";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/styles/screens/VerifyOtpScreen.styles";
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
    <SafeAreaView style={styles.safeContainer}>
      <Modal isVisible={modalVisible}>
        <View style={styles.modalContainer}>
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
        </View>
      </Modal>
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
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit)}
            disabled={loading || !userEmail}
          >
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.buttonText}>Verify Code</Text>
            )}
          </TouchableOpacity>

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
