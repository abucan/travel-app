import { router } from "expo-router";
import { useAuthStore } from "@/store/authStore";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const signOut = useAuthStore((state) => state.signOut);

  const handleSignOut = async () => {
    await signOut();
    router.replace("/(auth)/sign-in");
  };

  return (
    <SafeAreaView className="flex-1 w-full h-full items-center justify-center">
      <TouchableOpacity onPress={handleSignOut}>
        <Text className="text-white text-center text-lg">Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
