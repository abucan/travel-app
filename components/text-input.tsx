import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconInput = ({
  icon,
  placeholder,
  value,
  label,
  onChangeText,
  secureTextEntry = false,
  ...props
}: any) => {
  return (
    <View className="flex fle-col items-start justify-start gap-2">
      <Text className="font-helvetica-bold text-lg">{label}</Text>
      <View style={styles.container}>
        <Ionicons name={icon} size={24} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          {...props}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default IconInput;
