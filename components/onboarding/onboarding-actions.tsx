import { router } from "expo-router";
import { TouchableOpacity, Text } from "react-native";

export const OnboardingActions = ({
  bottomSheetModalRef,
}: {
  bottomSheetModalRef: any;
}) => {
  return (
    <>
      <TouchableOpacity
        className="w-full bg-blue-900 py-4 rounded-[24px]"
        onPress={() => {
          router.replace("/(auth)/sign-up");
          bottomSheetModalRef.current?.dismiss();
        }}
      >
        <Text className="font-helvetica-regular text-lg text-white text-center">
          Create Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="w-full py-4 border border-blue-900 rounded-[24px] mt-4"
        onPress={() => {
          router.replace("/(auth)/sign-in");
          bottomSheetModalRef.current?.dismiss();
        }}
      >
        <Text className="font-helvetica-regular text-lg text-black text-center">
          Already have an account? Sign in
        </Text>
      </TouchableOpacity>
    </>
  );
};
