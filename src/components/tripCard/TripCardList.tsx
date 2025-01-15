import { useRef, useState } from "react";
import { Header } from "../header/Header";
import { TripCardItem } from "./TripCardItem";
import { styles } from "./TripCardList.styles";
import { FlatList, View, ViewToken } from "react-native";

// animations
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { TripCardListProps } from "@/src/types";

export const TripCardList = ({
  trips,
  title,
  cta,
  ctaText,
}: TripCardListProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const dotWidths = useRef(trips.map(() => useSharedValue(10))).current;

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
      <Header title={title} cta={cta} ctaText={ctaText} />
      <FlatList
        data={trips}
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
      {trips.length > 0 && (
        <View style={styles.indicatorContainer}>
          {trips.map((_, index) => {
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
      )}
    </>
  );
};
