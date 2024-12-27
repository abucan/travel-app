import { router } from "expo-router";
import { useAuthStore } from "@/src/store/authStore";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const signOut = useAuthStore((state) => state.signOut);

  const handleSignOut = async () => {
    await signOut();
    router.replace("/(auth)/sign-in");
  };

  // TODO: add index screen
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={handleSignOut}>
        <Text
          style={{
            fontSize: 30,
            color: "red",
          }}
        >
          Logout
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
