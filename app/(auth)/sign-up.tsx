import SignUpButtons from "@/components/sign-up-btn";
import IconInput from "@/components/text-input";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUpScreen = () => {
  return (
    <SafeAreaView className="flex h-full bg-[#FDF6E6]">
      <View className="flex-1 gap-8 w-full max-w-md mx-auto">
        <View className="w-full max-w-md mx-auto mt-4 gap-2">
          <Text className="font-helvetica-bold text-3xl">Create Account</Text>
          <Text className="font-helvetica-medium text-xl text-gray-600">
            Start planning your perfect trip.
          </Text>
        </View>

        <View className="gap-2">
          <IconInput
            placeholder="Email"
            secureTextEntry={false}
            icon="mail"
            label="Email"
          />
          <IconInput
            placeholder="Password"
            secureTextEntry={true}
            icon="lock-closed"
            label="Password"
          />
          <IconInput
            placeholder="Confirm Password"
            secureTextEntry={true}
            icon="lock-closed"
            label="Confirm Password"
          />
        </View>

        <View className="flex flex-col gap-4">
          <TouchableOpacity className="w-full bg-blue-900 py-4 rounded-[24px]">
            <Text className="font-helvetica-regular text-xl text-white text-center">
              Create Account
            </Text>
          </TouchableOpacity>
          <Text className="text-gray-500 font-helvetica-regular text-center text-lg">
            Or using other method
          </Text>
          <SignUpButtons />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
