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

interface HeaderProps {
  title: string;
  cta?: boolean;
  ctaText?: string;
}

interface TripCardItemProps {
  id: number;
  city: string;
  country: string;
  image: ImageSourcePropType;
  days: number;
  nights: number;
  pricePerPerson: number;
}