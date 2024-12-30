import { Colors } from "@/src/constants/Colors";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./TabBar.styles";
import { AntDesign } from "@expo/vector-icons";

export const TabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  type TabRouteName = "index" | "explore" | "profile";

  const icons: Record<
    TabRouteName,
    (props: { color: string; size: number }) => JSX.Element
  > = {
    index: (props) => <AntDesign name="home" {...props} />,
    explore: (props) => <AntDesign name="search1" {...props} />,
    profile: (props) => <AntDesign name="user" {...props} />,
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}
          >
            {icons[route.name as TabRouteName]({
              color: isFocused ? "red" : Colors.light.text,
              size: 26,
            })}
            <Text
              style={{
                color: isFocused ? "red" : Colors.light.text,
                fontSize: 11,
              }}
            >
              {label.toString() || ""}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
