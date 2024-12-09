import React from "react";
import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AuthLayout = () => {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="sign-in" />
        <Stack.Screen name="sign-up" />
        <Stack.Screen
          name="verify-otp"
          options={{
            headerShown: true,
            title: "Verification",
            headerTitleAlign: "center",
            headerTintColor: "#000",
            headerStyle: {
              backgroundColor: "#FDF6E6",
            },
            contentStyle: {
              borderTopWidth: 1,
              borderBottomColor: "#000",
            },
            headerShadowVisible: false,
            statusBarStyle: "dark",
            headerLeft: () => (
              <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={24} color="#000" />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack>
    </>
  );
};

export default AuthLayout;
