import React from "react";
import { Stack } from "expo-router";
import { Colors } from "@/src/constants/Colors";

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
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
