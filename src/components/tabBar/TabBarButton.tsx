import React, { useEffect } from "react";
import { styles } from "./TabBar.styles";
import { Icons } from "@/src/constants/Icons";
import { Text, Pressable } from "react-native";
import { TabBarButtonProps } from "@/src/types";
import { Colors } from "@/src/constants/Colors";

import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type TabRouteName = "index" | "explore" | "profile";

export const TabBarButton = ({
  onPress,
  onLongPress,
  isFocused,
  routeName,
  label,
}: TabBarButtonProps) => {
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
      {
        duration: 350,
      }
    );
  }, [scale, isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);

    return {
      transform: [{ scale: scaleValue }],
    };
  });

  return (
    <Pressable
      style={styles.tabBarItem}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Animated.View style={animatedIconStyle}>
        {Icons[routeName as TabRouteName]({
          color: isFocused ? Colors.light.brand : Colors.light.icon,
          size: 20,
        })}
      </Animated.View>
      <Text
        style={{
          color: isFocused ? Colors.light.brand : Colors.light.iconText,
          fontSize: 12,
          fontFamily: "Helvetica-Now-Display-Regular",
        }}
      >
        {label.toString() || ""}
      </Text>
    </Pressable>
  );
};
