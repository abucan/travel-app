import { router } from "expo-router";
import { View, Text } from "react-native";

const SignInScreen = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text
        className="text-3xl text-red-500 text-center"
        onPress={() => router.replace("/(auth)/onboarding")}
      >
        Sign In
      </Text>
    </View>
  );
};

export default SignInScreen;
