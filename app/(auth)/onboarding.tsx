import { Image, Text, TouchableOpacity, View } from "react-native";
import Swiper from "react-native-swiper";
import { SafeAreaView } from "react-native-safe-area-context";

const OnboardingScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-red-500">
      <View className="bg-blue-500 flex-1">
        <Text className="text-right mr-8 mt-4">Skip</Text>
        <View className="bg-purple-500 items-center justify-center flex-1">
          <Image
            source={require("@/assets/onboarding/screen1.jpeg")}
            className="h-48 w-48"
          />
          <Text className="text-center font-helvetica-medium text-2xl">
            TITLE
          </Text>
          <Text className="text-center">DESCRIPTION</Text>
        </View>
        <View className="bg-green-500">
          <TouchableOpacity>
            <Text>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
