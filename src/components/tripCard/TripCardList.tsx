import { useState } from "react";
import { Header } from "../header/Header";
import { TripCardItem } from "./TripCardItem";
import { styles } from "./TripCardList.styles";
import { FlatList, View, ViewToken } from "react-native";
import { recommendedTrips } from "@/src/utils/mockData/recommendedTrips";

export const TripCardList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (viewableItems.length > 0 && viewableItems[0].index !== null) {
      setCurrentIndex(viewableItems[0].index);
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  return (
    <>
      <Header title="Recommended Trips" cta ctaText="See all" />
      <FlatList
        data={recommendedTrips}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged}
        contentContainerStyle={{
          marginVertical: 24,
        }}
        renderItem={({ item }) => <TripCardItem {...item} />}
      />
      <View style={styles.indicatorContainer}>
        {recommendedTrips.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index === currentIndex && styles.activeDot]}
          />
        ))}
      </View>
    </>
  );
};
