import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity, Text } from "react-native";

export const SignUpButtons = () => {
  const handleGoogleSignUp = () => {
    // Implement Google sign-up logic here
    console.log("Google sign-up pressed");
  };

  const handleAppleSignUp = () => {
    // Implement Apple sign-up logic here
    console.log("Apple sign-up pressed");
  };

  return (
    <View className="gap-4">
      <TouchableOpacity
        className="w-full bg-[#4285F4] py-4 rounded-[24px] flex flex-row items-center justify-center"
        onPress={handleGoogleSignUp}
      >
        <Ionicons name="logo-google" className="mr-2" size={24} color="white" />
        <Text className="text-white text-center text-lg font-helvetica-regular">
          Sign up with Google
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="w-full bg-[#000000] py-4 rounded-[24px] flex flex-row items-center justify-center"
        onPress={handleAppleSignUp}
      >
        <Ionicons name="logo-apple" className="mr-2" size={24} color="white" />
        <Text className="text-white text-center text-lg font-helvetica-regular">
          Sign up with Apple
        </Text>
      </TouchableOpacity>
    </View>
  );
};
