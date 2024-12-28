import { Text, View } from "react-native";
import { styles } from "./Features.styles";
import { Ionicons } from "@expo/vector-icons";
import { FeatureItemProps } from "@/src/types";

export const FeatureItem = ({ title, icon }: FeatureItemProps) => {
  return (
    <View style={styles.featureItemWrapper}>
      <View style={styles.feature}>
        <Ionicons name={icon} size={36} color={"gray"} />
      </View>
      <Text style={styles.featureText}>{title}</Text>
    </View>
  );
};
