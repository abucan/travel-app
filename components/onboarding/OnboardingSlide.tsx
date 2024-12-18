import { styles } from "./styles/onboardingSlide.styles";
import { View, Text, Image, ImageSourcePropType } from "react-native";

export const OnboardingSlide = ({
  source,
  header,
  description,
}: {
  source: ImageSourcePropType;
  header: string;
  description: string;
}) => {
  return (
    <View style={styles.container}>
      <Image source={source} resizeMode="contain" style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>{header}</Text>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
    </View>
  );
};
