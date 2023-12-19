import {
  ActivityIndicator,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

import { Color } from "../../constants/color";
import { BoldText } from "../StyledText";

type VariantType =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost";

type SizeType = "sm" | "default" | "lg";

interface ButtonProps {
  variant?: VariantType;
  size?: SizeType;
  title: string;
  onPress: () => void;
  icon?: JSX.Element;
  isLoading?: boolean;
}

const getStyle = ({
  variant = "default",
  size = "default",
  icon,
}: {
  variant: VariantType;
  size: SizeType;
  icon?: JSX.Element;
}): StyleProp<ViewStyle> => {
  const colorMap = {
    default: Color.Primary,
    destructive: Color.Red,
    secondary: "#d3d3d3",
    outline: "transparent",
    ghost: "transparent",
  };

  return {
    backgroundColor: colorMap[variant],
    height: size === "default" ? 40 : size === "sm" ? 36 : 44,
    paddingHorizontal: size === "default" ? 16 : size === "sm" ? 12 : 32,
    paddingVertical: size === "default" ? 8 : 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: variant === "outline" ? 1 : 0,
    borderColor: variant === "outline" ? "#d3d3d3" : "",
    flexDirection: icon ? "row" : undefined,
    width: "100%",
    marginRight: icon ? 12 : 0,
  };
};

export default function Button({
  variant = "default",
  size = "default",
  title,
  onPress,
  icon,
  isLoading,
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={getStyle({ variant, size, icon })}
    >
      {isLoading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <>
          <BoldText
            style={{
              color:
                variant === "default" || variant === "destructive"
                  ? "#fff"
                  : "#000",
              fontSize: 16,
            }}
          >
            {title}
          </BoldText>
          {icon && icon}
        </>
      )}
    </TouchableOpacity>
  );
}
