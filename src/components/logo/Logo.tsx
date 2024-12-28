import { Image } from "react-native";

export const BrandLogo = ({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <Image
      source={require("@/src/assets/tripster.png")}
      style={{
        width: width || 240,
        height: height || 70,
        alignSelf: "center",
      }}
    />
  );
};
