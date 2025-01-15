// import { router } from "expo-router";
// import { useAuthStore } from "@/src/store/authStore";
import { LogoIcon } from "@/src/components/logo/LogoIcon";
import { Image, ScrollView, Text, View } from "react-native";
import { SearchBar } from "@/src/components/searchBar/SearchBar";
import { FeaturesList } from "@/src/components/features/FeaturesList";
import { TripCardList } from "@/src/components/tripCard/TripCardList";
import { styles } from "@/src/styles/screens/(authenticated)/HomeScreen.styles";

// expo status bar
import { StatusBar } from "expo-status-bar";
import { recommendedTrips } from "@/src/utils/mockData/recommendedTrips";
import { useState } from "react";
import { TripCardItemProps } from "@/src/types";

export default function HomeScreen() {
  // const signOut = useAuthStore((state) => state.signOut);
  const [upcomingTrips, setUpcomingTrips] = useState<TripCardItemProps[]>([]);

  // const handleSignOut = async () => {
  //   await signOut();
  //   router.replace("/(auth)/sign-in");
  // };

  return (
    <View style={styles.wrapper}>
      <StatusBar style="light" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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
        </View>

        <SearchBar />
        <FeaturesList />
        {upcomingTrips.length > 0 && (
          <TripCardList
            title="Upcoming Trip"
            trips={upcomingTrips}
            type="upcoming"
          />
        )}
        <TripCardList
          cta
          ctaText="See all"
          title="Recommended Trips"
          trips={recommendedTrips}
          type="recommended"
        />

        <View style={{ marginTop: 50 }} />
      </ScrollView>
    </View>
  );
}
