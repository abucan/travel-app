import { Text, View } from "react-native";
import { styles } from "./Features.styles";
import { FeatureItemProps } from "@/src/types";

export const FeatureItem = ({ title, icon }: FeatureItemProps) => {
  return (
    <View style={styles.featureItemWrapper}>
      <View style={styles.feature}>{icon}</View>
      <Text style={styles.featureText}>{title}</Text>
    </View>
  );
};
