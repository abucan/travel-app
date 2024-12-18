import { styles } from "../header/Header.styles";
import { View, Text } from "react-native";

export const Header = ({
  title,
  description,
  position = "center",
}: {
  title: string;
  description: string;
  position?: "center" | "left";
}) => {
  const textPosition =
    position === "left" ? styles.leftAlign : styles.textContainer;

  return (
    <View style={[styles.textContainer, textPosition]}>
      <Text style={styles.headerText}>{title}</Text>
      <Text style={styles.descriptionText}>{description}</Text>
    </View>
  );
};
