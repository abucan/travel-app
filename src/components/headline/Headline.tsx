import { View, Text } from "react-native";
import { styles } from "./Headline.styles";

export const Headline = ({
  title,
  description,
  position = "center",
  isBold = false,
  boldText,
}: {
  title: string;
  description: string;
  position?: "center" | "left";
  isBold?: boolean;
  boldText?: string;
}) => {
  const textPosition =
    position === "left" ? styles.contentLeft : styles.wrapper;

  return (
    <View style={[styles.wrapper, textPosition]}>
      <Text style={styles.title}>{title}</Text>
      <Text
        style={[styles.description, position === "left" && styles.textLeft]}
      >
        {description}{" "}
        {isBold && <Text style={styles.boldText}>{boldText}</Text>}
      </Text>
    </View>
  );
};
