import React from "react";
import { router, Stack } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        title: "",
        headerStyle: {
          backgroundColor: Colors.light.background,
        },
        headerShadowVisible: false,
        headerTransparent: true,
        headerLeft: () => {
          if (router.canGoBack()) {
            return (
              <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={24} color="#000" />
              </TouchableOpacity>
            );
          }
        },
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
