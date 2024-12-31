import { useRef, useState } from "react";
import { Header } from "../header/Header";
import { TripCardItem } from "./TripCardItem";
import { styles } from "./TripCardList.styles";
import { FlatList, View, ViewToken } from "react-native";
import { recommendedTrips } from "@/src/utils/mockData/recommendedTrips";

// animations
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export const TripCardList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const dotWidths = useRef(
    recommendedTrips.map(() => useSharedValue(10))
  ).current;

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (viewableItems.length > 0 && viewableItems[0].index !== null) {
      const newIndex = viewableItems[0].index;
      setCurrentIndex(newIndex);

      dotWidths.forEach((width, index) => {
        width.value = index === newIndex ? withSpring(20) : withSpring(10);
      });
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
        {recommendedTrips.map((_, index) => {
          const animatedDotStyle = useAnimatedStyle(() => ({
            width: dotWidths[index].value,
          }));

          return (
            <Animated.View
              key={index}
              style={[
                styles.dot,
                index === currentIndex && styles.activeDot,
                animatedDotStyle,
              ]}
            />
          );
        })}
      </View>
    </>
  );
};
