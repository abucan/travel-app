import { Redirect } from "expo-router";
import { Colors } from "@/src/constants/Colors";
import { useAuthStore } from "@/src/store/authStore";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const FlowScreen = () => {
  const { isEmailVerified, user, loading } = useAuthStore();

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.light.brand} />
      </View>
    );
  }

  if (user && !isEmailVerified) {
    return <Redirect href="/(auth)/verify-otp" />;
  }

  if (user && isEmailVerified) {
    return <Redirect href="/(tabs)" />;
  }

  // TODO: at some point, show onboarding only once
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
