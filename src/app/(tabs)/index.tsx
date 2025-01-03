// import { router } from "expo-router";
// import { useAuthStore } from "@/src/store/authStore";
import { LogoIcon } from "@/src/components/logo/LogoIcon";
import { Image, ScrollView, Text, View } from "react-native";
import { SearchBar } from "@/src/components/searchBar/SearchBar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FeaturesList } from "@/src/components/features/FeaturesList";
import { TripCardList } from "@/src/components/tripCard/TripCardList";
import { styles } from "@/src/styles/screens/(authenticated)/HomeScreen.styles";

// expo status bar
import { StatusBar } from "expo-status-bar";
import Arrow from "@/src/assets/arrow.svg";

export default function HomeScreen() {
  // const signOut = useAuthStore((state) => state.signOut);
  const insets = useSafeAreaInsets();

  // const handleSignOut = async () => {
  //   await signOut();
  //   router.replace("/(auth)/sign-in");
  // };

  return (
    <View style={styles.wrapper}>
      <StatusBar style="light" />
      <ScrollView style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image
            source={require("@/src/assets/Designer5.png")}
            resizeMode="cover"
            style={styles.image}
            fadeDuration={0}
          />
          <View style={styles.overlay} />
          <View style={[styles.logo]}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
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
                {String("Hi, Ante").slice(0, 20) + " 👋"}
              </Text>
            </View>
          </View>
          {/* <View style={styles.logo}>
            <Arrow
              height={70}
              color={"white"}
              rotation={110}
              style={{ top: 55, right: 40, zIndex: 100 }}
            />
          </View> */}
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
