import { styles } from "./AppButton.styles";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import Animated, { ZoomIn } from "react-native-reanimated";
import { useAnimation } from "@/src/context/AnimationContext";
import { Colors } from "@/src/constants/Colors";

interface AppButtonProps
  extends Omit<React.ComponentProps<typeof TouchableOpacity>, "style"> {
  title: string;
  variant?: "standard" | "link";
  shouldAnimate?: boolean;
  isLoading?: boolean;
}

export const AppButton = ({
  title,
  variant = "standard",
  shouldAnimate = false,
  isLoading = false,
  ...props
}: AppButtonProps) => {
  const { isAnimationEnabled } = useAnimation();

  const buttonStyle = [
    variant === "link" ? styles.linkButton : styles.button,
    props.disabled && styles.disabledButton,
  ];
  const textStyle = [
    styles.buttonText,
    variant === "link" && { color: Colors.light.brand },
    props.disabled && styles.disabledButtonText,
  ];

  const TextComponent =
    isAnimationEnabled && shouldAnimate ? Animated.Text : Text;
  const animationProps =
    isAnimationEnabled && shouldAnimate
      ? { entering: ZoomIn.duration(500) }
      : {};

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={props.onPress}
      disabled={props.disabled}
      {...props}
    >
      {!isLoading ? (
        <TextComponent {...animationProps} style={textStyle}>
          {title}
        </TextComponent>
      ) : (
        <ActivityIndicator />
      )}
    </TouchableOpacity>
  );
};
