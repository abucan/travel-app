import { styles } from "./AppButton.styles";
import { Text, TouchableOpacity } from "react-native";
import Animated, { ZoomIn } from "react-native-reanimated";
import { useAnimation } from "@/src/context/AnimationContext";

interface AppButtonProps
  extends Omit<React.ComponentProps<typeof TouchableOpacity>, "style"> {
  title: string;
  variant?: "standard" | "link";
  shouldAnimate?: boolean;
}

export const AppButton = ({
  title,
  variant = "standard",
  shouldAnimate = false,
  ...props
}: AppButtonProps) => {
  const { isAnimationEnabled } = useAnimation();

  const buttonStyle = variant === "link" ? styles.linkButton : styles.button;
  const textStyle =
    variant === "link"
      ? [styles.buttonText, { color: "#fff" }]
      : styles.buttonText;

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
      <TextComponent {...animationProps} style={textStyle}>
        {title}
      </TextComponent>
    </TouchableOpacity>
  );
};
