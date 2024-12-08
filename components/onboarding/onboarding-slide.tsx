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
    <View className="flex-1 items-center justify-start gap-12">
      <Image source={source} resizeMode="contain" className="flex-[60%]" />
      <View className="items-center gap-2 flex-[40%]">
        <Text className="font-helvetica-bold max-w-sm text-4xl text-center">
          {header}
        </Text>
        <Text className="font-helvetica-medium text-gray-600 max-w-sm text-center text-xl">
          {description}
        </Text>
      </View>
    </View>
  );
};
