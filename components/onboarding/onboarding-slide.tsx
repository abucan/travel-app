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
    <View className="flex-1 items-center justify-start">
      <Image source={source} resizeMode="contain" className="w-1/2 h-1/2" />
      <View className="items-center">
        <Text className="font-helvetica-bold max-w-sm text-3xl text-center">
          {header}
        </Text>
        <Text className="font-helvetica-regular max-w-sm text-center text-lg">
          {description}
        </Text>
      </View>
    </View>
  );
};
