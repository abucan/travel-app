import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SignUpButtons = () => {
  const handleGoogleSignUp = () => {
    // Implement Google sign-up logic here
    console.log("Google sign-up pressed");
  };

  const handleAppleSignUp = () => {
    // Implement Apple sign-up logic here
    console.log("Apple sign-up pressed");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.googleButton]}
        onPress={handleGoogleSignUp}
      >
        <Ionicons name="logo-google" size={24} color="white" />
        <Text style={styles.buttonText}>Sign up with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.appleButton]}
        onPress={handleAppleSignUp}
      >
        <Ionicons name="logo-apple" size={24} color="white" />
        <Text style={styles.buttonText}>Sign up with Apple</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  googleButton: {
    backgroundColor: "#4285F4",
  },
  appleButton: {
    backgroundColor: "#000",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default SignUpButtons;
