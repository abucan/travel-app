// import { router } from "expo-router";
// import { useAuthStore } from "@/src/store/authStore";
import { ScrollView, Text, View } from "react-native";
import { SearchBar } from "@/src/components/searchBar/SearchBar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FeaturesList } from "@/src/components/features/FeaturesList";
import { TripCardList } from "@/src/components/tripCard/TripCardList";
import { styles } from "@/src/styles/screens/(authenticated)/HomeScreen.styles";

import { Ionicons } from "@expo/vector-icons";
import { LogoIcon } from "@/src/components/logo/LogoIcon";
import Svg, { Defs, RadialGradient, Stop, Rect } from "react-native-svg";

export default function HomeScreen() {
  // const signOut = useAuthStore((state) => state.signOut);
  const insets = useSafeAreaInsets();

  // const handleSignOut = async () => {
  //   await signOut();
  //   router.replace("/(auth)/sign-in");
  // };

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container}>
        <View style={styles.imageWrapper}>
          <Svg height="100%" width="100%">
            <Defs>
              <RadialGradient
                id="gradient"
                cx="50%"
                cy="50%"
                rx="70%"
                ry="70%"
                fx="50%"
                fy="30%"
              >
                <Stop offset="0%" stopColor="#a8e063" stopOpacity="1" />
                {/* Light Lime Green */}
                <Stop offset="0%" stopColor="#56ab2f" stopOpacity="1" />
                {/* Deeper Green */}
                <Stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                {/* White */}
              </RadialGradient>
            </Defs>
            <Rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#gradient)"
            />
          </Svg>
          <View style={[styles.logo, { top: insets.top }]}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <LogoIcon />
              <Text
                style={{
                  fontFamily: "Helvetica-Now-Display-Bold",
                  fontSize: 26,
                  color: "white",
                }}
              >
                Hi, Ante 👋
              </Text>
            </View>
            <View style={styles.featureItemWrapper}>
              <Ionicons
                name="notifications-outline"
                size={24}
                color="black"
                style={styles.feature}
              />
            </View>
          </View>
        </View>

        <SearchBar />
        <FeaturesList />
        <TripCardList />

        {/* delete later*/}
        <FeaturesList />
        <FeaturesList />
      </ScrollView>
    </View>
  );
}
