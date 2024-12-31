/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

const brandColor = "#02023d";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#F7F7F7",
    tint: tintColorLight,
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,

    brand: brandColor,
    icon: "#75808A",
    iconText: "#777F89",
    link: "#0666EB",
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};
