import React from "react";
import { Pressable } from "react-native";
import { router, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: true,
          headerTitle: "",
          headerTransparent: true,
          headerShadowVisible: false,
          animation: "fade_from_bottom",
          headerLeft: () => {
            if (router.canGoBack()) {
              return (
                <Pressable onPressIn={() => router.back()}>
                  <Ionicons name="arrow-back" size={24} color="black" />
                </Pressable>
              );
            }
          },
        }}
      >
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" />
        <Stack.Screen name="sign-in" />
        <Stack.Screen name="verify-otp" />
        <Stack.Screen name="reset-password" />
      </Stack>
      <StatusBar style="dark" translucent />
    </>
  );
};

export default AuthLayout;
