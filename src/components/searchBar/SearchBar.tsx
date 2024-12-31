import { styles } from "./SearchBar.styles";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, Pressable } from "react-native";

export const SearchBar = () => {
  return (
    <Pressable style={styles.wrapper}>
      <View style={styles.container}>
        <Ionicons name="search" size={32} style={styles.icon} />
        <View style={styles.searchContainer}>
          <Text style={styles.whereText}>Where to?</Text>
          <View style={styles.description}>
            <Text style={styles.descriptionText}>Anywhere</Text>
            <View style={styles.dot} />
            <Text style={styles.descriptionText}>Anytime</Text>
            <View style={styles.dot} />
            <Text style={styles.descriptionText}>Any budget</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};
