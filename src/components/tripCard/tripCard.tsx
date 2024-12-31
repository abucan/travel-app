import { View, Text } from "react-native";
import React from "react";
import { styles } from "./TripCard.styles";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { AppButton } from "../buttons/AppButton";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

export const TripCard = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Recommended Trips</Text>
        <TouchableOpacity style={styles.seeAll}>
          <Text style={styles.seeAllText}>See All</Text>
          <MaterialIcons name="navigate-next" size={20} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.imageWrapper1}>
          <Image
            source={require("@/src/assets/city.png")}
            style={styles.image1}
          />

          <View
            style={{
              position: "absolute",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              top: 10,
              left: 10,
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              paddingHorizontal: 16,
              paddingVertical: 6,
              borderRadius: 50,
              borderCurve: "continuous",
            }}
          >
            <FontAwesome6 name="wand-magic-sparkles" size={14} color="white" />
            <Text style={{ color: "white" }}>AI Generated</Text>
          </View>
        </View>
        <View style={styles.cardFooter}>
          <View style={styles.cardFooterText}>
            <View style={styles.cardFooterDate}>
              <Ionicons name="map-outline" size={20} color="black" />
              <Text style={styles.cardFooterTitle} numberOfLines={1}>
                Paris, France
              </Text>
            </View>
            <View style={styles.cardFooterDate}>
              <AntDesign name="calendar" size={20} color="black" />
              <Text>10 Nov 2024 - 15 Nov 2024</Text>
            </View>
            <Text style={styles.cardFooterPriceText}>
              $1,000
              <Text style={styles.cardFooterPersonText}>/person</Text>
            </Text>
          </View>
          <AppButton title="Explore Now" />
        </View>
      </View>
    </View>
  );
};
