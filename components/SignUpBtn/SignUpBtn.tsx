import React from "react";
import { styles } from "./SignUpBtn.styles";
import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity, Text } from "react-native";

export const SignUpButtons = ({ isSignIn = false }: { isSignIn?: boolean }) => {
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
      <TouchableOpacity style={styles.googleBtn} onPress={handleGoogleSignUp}>
        <Ionicons
          name="logo-google"
          style={styles.icon}
          size={24}
          color="white"
        />
        <Text style={styles.btnText}>
          {isSignIn ? "Sign in with Google" : "Sign up with Google"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.googleBtn, styles.appleBtn]}
        onPress={handleAppleSignUp}
      >
        <Ionicons
          name="logo-apple"
          style={styles.icon}
          size={24}
          color="white"
        />
        <Text style={styles.btnText}>
          {isSignIn ? "Sign in with Apple" : "Sign up with Apple"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
