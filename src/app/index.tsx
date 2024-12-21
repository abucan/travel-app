import { Redirect } from "expo-router";
import { Colors } from "@/src/constants/Colors";
import { useAuthStore } from "@/src/store/authStore";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const FlowScreen = () => {
  const { isEmailVerified, user, loading } = useAuthStore();

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
    backgroundColor: Colors.light.background,
  },
});

export default FlowScreen;
