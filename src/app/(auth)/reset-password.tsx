import { z } from "zod";
import { useState } from "react";
import { router } from "expo-router";
import { useAuthStore } from "@/src/store/authStore";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BrandLogo } from "@/src/components/logo/Logo";
import { SafeAreaView } from "react-native-safe-area-context";
import { resetPasswordSchema } from "@/src/utils/schemas/auth.schemas";
import { CustomTextInput } from "@/src/components/textInput/TextInput";
import { styles } from "@/src/styles/screens/ForgotPasswordScreen.styles";
import { View, KeyboardAvoidingView, Platform, Alert } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { MyModal } from "@/src/components/modal/Modal";
import { Headline } from "@/src/components/headline/Headline";
import { AppButton } from "@/src/components/buttons/AppButton";

const ResetPasswordScreen = () => {
  const resetPassword = useAuthStore((state) => state.resetPassword);

  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMsg, setModalMsg] = useState({
    title: "",
    description: "",
    error: true,
    icon: "checkmark-circle",
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof resetPasswordSchema>) => {
    try {
      setLoading(true);
      await resetPassword(values.email);
      setModalVisible(true);
      setModalMsg({
        title: "Reset Password",
        description:
          "An email has been sent to your email address with instructions to reset your password.",
        error: false,
        icon: "checkmark-circle",
      });
    } catch (error) {
      setModalVisible(true);
      setModalMsg({
        title: "Error",
        description: "An error occurred while resetting your password.",
        error: true,
        icon: "close-circle",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <MyModal isDialog modalOpen={modalVisible} setModalOpen={setModalVisible}>
        <View style={styles.modalContent}>
          <Ionicons
            name={modalMsg.icon as keyof typeof Ionicons.glyphMap}
            size={48}
            color={modalMsg.error ? "red" : "green"}
          />
          <Headline title={modalMsg.title} description={modalMsg.description} />
          <AppButton
            title={!modalMsg.error ? "Back to Sign In" : "Close"}
            onPress={
              !modalMsg.error
                ? () => router.replace("/(auth)/sign-in")
                : () => setModalVisible(false)
            }
          />
        </View>
      </MyModal>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <BrandLogo />
          <Headline
            title="Reset Password"
            description="Enter your email address and we'll send you instructions to reset your password."
          />

          <View style={styles.content}>
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

            <View style={styles.footer}>
              <AppButton
                title="Send Reset Link"
                onPress={handleSubmit(onSubmit)}
                isLoading={loading}
              />
              <AppButton
                title="Back to Sign In"
                onPress={() => router.replace("/(auth)/sign-in")}
                variant="link"
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;
