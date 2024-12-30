// import { router } from "expo-router";
// import { useAuthStore } from "@/src/store/authStore";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SearchBar } from "@/src/components/searchBar/SearchBar";
import { FeaturesList } from "@/src/components/features/FeaturesList";
import { styles } from "@/src/styles/screens/(authenticated)/HomeScreen.styles";

import Tripster from "@/src/assets/tripster.svg";

export default function HomeScreen() {
  // const signOut = useAuthStore((state) => state.signOut);

  // const handleSignOut = async () => {
  //   await signOut();
  //   router.replace("/(auth)/sign-in");
  // };

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image
            source={require("@/src/assets/city.png")}
            resizeMode="cover"
            style={styles.image}
            fadeDuration={0}
          />
          <View style={styles.overlay} />
          <View style={styles.logo}>
            <Tripster width={340} height={75} />
          </View>
        </View>

        <SearchBar />
        <FeaturesList />

        <View style={styles.wrapper1}>
          <View style={styles.header}>
            <Text>Upcoming Trip</Text>
            <Text>5d : 18: 30s</Text>
          </View>
          <View style={styles.imageWrapper1}>
            <Image
              source={require("@/src/assets/city.png")}
              style={styles.image1}
            />
            <View style={styles.imageFooter}>
              <View>
                <Text>Paris, France</Text>
                <Text>10 people</Text>
              </View>
              <TouchableOpacity>
                <Text>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* delete later*/}
        <FeaturesList />
        <FeaturesList />
        <FeaturesList />
      </ScrollView>
    </View>
  );
}
