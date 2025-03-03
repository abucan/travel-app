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

interface TripCardListProps {
  trips: TripCardItemProps[];
  type: "upcoming" | "recommended";
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
  generatedBy?: string;
  isUpcoming?: boolean;
  date?: Date;
}
interface TabBarButtonProps {
  onPress: () => void;
  onLongPress: () => void;
  isFocused: boolean;
  routeName: string;
  label: string;
}