import { styles } from "./styles/OnboardingSlide.styles";
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
    <View style={styles.slide}>
      <Image source={source} resizeMode="contain" style={styles.imageWrapper} />
      <View style={styles.content}>
        <Text style={styles.title}>{header}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};
