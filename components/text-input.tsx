import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { CustomTextInputProps } from "@/types";
import { View, TextInput, Text } from "react-native";

export const CustomTextInput = ({
  icon,
  placeholder,
  value,
  label,
  onChangeText,
  secureTextEntry = false,
  error,
  ...props
}: CustomTextInputProps) => {
  return (
    <View className="flex flex-col items-start justify-start gap-1">
      <Text className="font-helvetica-bold text-lg">{label}</Text>
      <View
        className={`flex flex-row items-center border rounded-[12px] p-1 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      >
        <Ionicons name={icon} size={24} color="gray" className="mx-2" />
        <TextInput
          className="flex-1 text-base"
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          {...props}
        />
      </View>
      {error && <Text className="text-red-500 text-sm mt-1">{error}</Text>}
    </View>
  );
};
