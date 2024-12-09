import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { OtpInput } from "react-native-otp-entry";

const VerifyOTPScreen = () => {
  return (
    <SafeAreaView className="flex h-full bg-[#FDF6E6]">
      <View className="flex-1 flex-col w-full max-w-sm mx-auto mt-8">
        <View className="items-center gap-8">
          <View className="bg-blue-900/20 w-32 h-32 rounded-full flex items-center justify-center">
            <View className="bg-blue-900 w-24 h-24 rounded-full flex items-center justify-center">
              <Ionicons name={"mail"} size={32} color="white" />
            </View>
          </View>

          <View className="w-full max-w-md mx-auto flex flex-col items-center">
            <Text className="font-helvetica-bold text-3xl">
              Verification Code
            </Text>
            <Text className="font-helvetica-medium text-xl text-gray-500 text-center">
              Enter the verification code sent to your email.
            </Text>
          </View>

          <OtpInput
            numberOfDigits={6}
            onTextChange={(text) => console.log(text)}
          />

          <TouchableOpacity className="w-full bg-blue-900 py-4 rounded-[24px]">
            <Text className="font-helvetica-regular text-lg text-white text-center">
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerifyOTPScreen;
