import React from "react";
import { Platform } from "react-native";
import { router, Stack } from "expo-router";
import { Colors } from "@/constants/Colors";

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarStyle: Platform.OS === "android" ? "dark" : "auto",
        statusBarBackgroundColor: Colors.light.background,
        headerStyle: {
          backgroundColor: Colors.light.background,
        },
        headerShadowVisible: false,
        headerTransparent: true,
      }}
    >
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="sign-up" />
      <Stack.Screen name="verify-otp" />
    </Stack>
  );
};

export default AuthLayout;
