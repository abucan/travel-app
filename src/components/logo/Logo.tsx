import { Image } from "react-native";

export const BrandLogo = () => {
  return (
    <Image
      source={require("@/src/assets/tripster.png")}
      style={{
        width: 240,
        height: 70,
        alignSelf: "center",
      }}
    />
  );
};