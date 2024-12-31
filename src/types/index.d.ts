import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface CustomTextInputProps {
  icon: keyof typeof Ionicons.glyphMap;
  placeholder: string;
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  error?: string;
}

interface FeatureItemProps {
  icon: React.ReactElement;
  title: string;
}
