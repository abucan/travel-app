import "@/src/styles/global.css";

import "react-native-reanimated";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useAuthStore } from "@/src/store/authStore";
import { useColorScheme } from "@/src/hooks/useColorScheme";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const initializeAuth = useAuthStore((store) => store.initializeAuth);
  const [authInitialized, setAuthInitialized] = useState(false);

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("@/src/assets/fonts/SpaceMono-Regular.ttf"),
    "Helvetica-Now-Display-Regular": require("@/src/assets/fonts/HelveticaNowDisplay-Regular.ttf"),
    "Helvetica-Now-Display-Medium": require("@/src/assets/fonts/HelveticaNowDisplay-Medium.ttf"),
    "Helvetica-Now-Display-Bold": require("@/src/assets/fonts/HelveticaNowDisplay-Bold.ttf"),
  });

  useEffect(() => {
    const initialize = async () => {
      try {
        const cleanup = await initializeAuth();
        setAuthInitialized(true);
        return cleanup;
      } catch (error) {
        console.error("Failed to initialize auth:", error);
        setAuthInitialized(true);
        return undefined;
      }
    };

    const cleanupPromise = initialize();

    return () => {
      cleanupPromise.then((cleanup) => cleanup?.());
    };
  }, []);

  useEffect(() => {
    if (loaded && authInitialized) {
      SplashScreen.hideAsync();
    }
  }, [loaded, authInitialized]);

  if (!loaded || !initializeAuth) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
