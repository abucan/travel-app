import { styles } from "./appButton.styles";
import { Text, TouchableOpacity } from "react-native";

interface AppButtonProps
  extends Omit<React.ComponentProps<typeof TouchableOpacity>, "style"> {
  title: string;
  variant?: "standard" | "link";
}

export const AppButton = ({
  title,
  variant = "standard",
  ...props
}: AppButtonProps) => {
  const buttonStyle = variant === "link" ? styles.linkButton : styles.button;
  const textStyle =
    variant === "link"
      ? [styles.buttonText, { color: "#1e3a8a" }]
      : styles.buttonText;

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={props.onPress}
      disabled={props.disabled}
      {...props}
    >
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
