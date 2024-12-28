import { FlatList } from "react-native";
import { FeatureItem } from "./FeatureItem";
import { Ionicons } from "@expo/vector-icons";
import { features } from "@/src/utils/mockData/features";

export const FeaturesList = () => {
  return (
    <FlatList
      data={features}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        gap: 24,
        marginTop: 20,
        paddingHorizontal: 20,
        display: "flex",
        alignItems: "center",
        marginHorizontal: "auto",
        justifyContent: "space-between",
      }}
      renderItem={({ item }) => (
        <FeatureItem
          icon={item.icon as keyof typeof Ionicons.glyphMap}
          title={item.title}
        />
      )}
    />
  );
};
