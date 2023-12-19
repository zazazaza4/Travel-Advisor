import { FC } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

import { TypeEnum } from "../api/travelApi";
import { Color } from "../constants/color";

interface CategoryDataType {
  id: number;
  name: string;
  size?: number;
  color: Color;
  type: TypeEnum;
}

interface CategoriesProps {
  className?: string;
  items: CategoryDataType[];
  selected: TypeEnum;
  onChangeCategory: (type: TypeEnum) => void;
}

export const Categories: FC<CategoriesProps> = ({
  className,
  items,
  selected,
  onChangeCategory,
}) => {
  return (
    <View className="gap-2">
      <FlatList
        data={items}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => onChangeCategory(item.type)}
            className={`h-16 w-16 bg-secondary flex justify-center items-center rounded-md ${
              selected === item.type && "bg-primary"
            }`}
          >
            <Icon
              name={item.name}
              size={item.size ?? 25}
              color={selected === item.type ? Color.White : item.color}
            />
          </TouchableOpacity>
        )}
        horizontal
        contentContainerStyle={{
          gap: 12,
          width: "100%",
          justifyContent: "space-around",
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
