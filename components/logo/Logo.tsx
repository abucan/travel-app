import { Image } from "react-native";

export const BrandLogo = () => {
  return (
    <Image
      source={require("@/assets/tripster.png")}
      style={{
        width: 300,
        height: 70,
        alignSelf: "center",
      }}
    />
  );
};
