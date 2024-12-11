import { useAuthStore } from "@/store/authStore";
import { Redirect } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

const FlowScreen = () => {
  const { initializeAuth, isEmailVerified, user, loading } = useAuthStore();

  useEffect(() => {
    initializeAuth();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-[#FDF6E6]">
        <ActivityIndicator size="large" color="#1E3A8A" />
      </View>
    );
  }

  if (user && !isEmailVerified) {
    return <Redirect href="/(auth)/verify-otp" />;
  }

  if (user && isEmailVerified) {
    return <Redirect href="/(tabs)" />;
  }

  return <Redirect href={"/(auth)/onboarding"} />;
};

export default FlowScreen;
