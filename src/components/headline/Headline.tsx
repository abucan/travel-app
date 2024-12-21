import { View, Text } from "react-native";
import { styles } from "./Headline.styles";

export const Headline = ({
  title,
  description,
  position = "center",
}: {
  title: string;
  description: string;
  position?: "center" | "left";
}) => {
  const textPosition =
    position === "left" ? styles.itemLeftAlign : styles.textContainer;

  return (
    <View style={[styles.textContainer, textPosition]}>
      <Text style={styles.headerText}>{title}</Text>
      <Text
        style={[
          styles.descriptionText,
          position === "left" && styles.textLeftAlign,
        ]}
      >
        {description}
      </Text>
    </View>
  );
};
