import React from "react";
import { Stack } from "expo-router";
import { Platform } from "react-native";
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
        headerTransparent: true,
        headerShadowVisible: false,
        animation: "fade_from_bottom",
      }}
    >
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="sign-up" />
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="verify-otp" />
    </Stack>
  );
};

export default AuthLayout;
