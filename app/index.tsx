import { useEffect } from "react";
import { Redirect } from "expo-router";
import { useAuthStore } from "@/store/authStore";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const FlowScreen = () => {
  const { initializeAuth, isEmailVerified, user, loading } = useAuthStore();

  useEffect(() => {
    initializeAuth();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FDF6E6",
  },
});

export default FlowScreen;
