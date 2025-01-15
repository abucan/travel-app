import React from "react";
import { Image } from "react-native";
import { View, Text } from "react-native";
import { styles } from "./TripCardItem.styles";
import { TripCardItemProps } from "@/src/types";
import { AppButton } from "../buttons/AppButton";

// icons
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export const TripCardItem = ({
  city,
  country,
  days,
  nights,
  pricePerPerson,
  generatedBy,
}: TripCardItemProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <View style={styles.imageWrapper}>
          <Image
            source={require("@/src/assets/city.png")}
            style={styles.image}
          />

          <View style={styles.imageLabel}>
            <FontAwesome6 name="wand-magic-sparkles" size={14} color="#fff" />
            <Text style={{ color: "#fff" }}>
              {generatedBy || "AI Generated"}
            </Text>
          </View>
        </View>
        <View style={styles.cardFooter}>
          <View style={styles.cardFooterInfo}>
            <View style={styles.cardFooterDistinct}>
              <Ionicons name="map-outline" size={20} color="black" />
              <Text style={styles.cardFooterTitle} numberOfLines={1}>
                {city}, {country}
              </Text>
            </View>
            <View style={styles.cardFooterDistinct}>
              <AntDesign name="calendar" size={20} color="black" />
              <Text>
                {days} days - {nights} nights
              </Text>
            </View>
            <Text style={styles.cardFooterPriceText}>
              ${pricePerPerson}
              <Text style={styles.cardFooterPersonText}>/person</Text>
            </Text>
          </View>
          <AppButton title="Explore Now" />
        </View>
      </View>
    </View>
  );
};
