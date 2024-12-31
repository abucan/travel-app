import React from "react";
import { styles } from "./Header.styles";
import { HeaderProps } from "@/src/types";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

export const Header = ({ title, cta, ctaText }: HeaderProps) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {cta && (
        <TouchableOpacity style={styles.seeAll}>
          <Text style={styles.seeAllText}>{ctaText}</Text>
          <MaterialIcons name="navigate-next" size={20} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};
