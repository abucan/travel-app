import React, { useState } from "react";
import { styles } from "./textInput.styles";
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
  const [securePassword, setSecurePassword] = useState(secureTextEntry);

  const handlePasswordVisibility = () => {
    setSecurePassword(!securePassword);
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.textLabel}>{label}</Text>}
      <View
        style={[styles.textInputContainer, error && { borderColor: "red" }]}
      >
        <Ionicons name={icon} size={24} style={styles.icon} />
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={securePassword}
          {...props}
        />
        {secureTextEntry && (
          <Ionicons
            onPress={handlePasswordVisibility}
            name={securePassword ? "eye-off" : "eye"}
            size={24}
            style={styles.icon}
          />
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};
