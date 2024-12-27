import React from "react";
import { styles } from "./SignUpBtn.styles";
import { View, TouchableOpacity, Text, Platform } from "react-native";

import AppleIcon from "@/src/assets/icons/apple.svg";
import GoogleIcon from "@/src/assets/icons/google.svg";

export const SignUpButtons = ({
  isAuthPage = false,
}: {
  isAuthPage?: boolean;
}) => {
  const handleGoogleSignUp = () => {
    // TODO: implement Google sign-up logic here
    console.log("Google sign-up pressed");
  };

  const handleAppleSignUp = () => {
    // TODO: implement Apple sign-up logic here
    console.log("Apple sign-up pressed");
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.button} onPress={handleGoogleSignUp}>
        <GoogleIcon style={styles.icon} width={24} height={24} />
        <Text style={styles.text}>
          {!isAuthPage ? "Google" : "Continue with Google"}
        </Text>
      </TouchableOpacity>
      {Platform.OS === "ios" && (
        <TouchableOpacity style={styles.button} onPress={handleAppleSignUp}>
          <AppleIcon style={styles.icon} width={24} height={24} />
          <Text style={styles.text}>
            {!isAuthPage ? "Apple" : "Continue with Apple"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
