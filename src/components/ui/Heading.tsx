import { FC, ReactNode } from "react";
import { Text } from "react-native";

interface HeadingProps {
  className?: string;
  children: ReactNode;
}

export const Heading: FC<HeadingProps> = ({ className, children }) => {
  return (
    <Text className={`text-white text-3xl font-bold ${className}`}>
      {children}
    </Text>
  );
};
