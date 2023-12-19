import { FC } from "react";
import {
  ImageBackground,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Color } from "../constants/color";
import { truncate } from "../lib/truncate";
import { PlaceType } from "../types/placeType";

export interface CardProps {
  className?: string;
  data: PlaceType;
}

export const PlaceCard: FC<CardProps> = ({ data, className }) => {
  const { navigate } = useNavigation();

  if (!data.name) return null;

  const goToDetailsScreen = () => {
    navigate("DetailsNavigation" as never, { param: data } as never);
  };

  const uri =
    data.photo?.images?.large.url ||
    "https://cbl.salfordhomesearch.co.uk/choice/images/shared/noimagethumb.jpg";
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={goToDetailsScreen}
      className={`${className}`}
    >
      <ImageBackground
        source={
          {
            uri,
          } as ImageSourcePropType
        }
        className="h-52 w-full overflow-hidden rounded-lg"
      >
        <View
          className="absolute top-0 left-0 w-full h-full flex-1 justify-end pb-4 px-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        >
          <Text className="text-white text-2xl font-bold mt-10">
            {truncate(data.name, 15)}
          </Text>
          <View className="flex-row justify-between items-end">
            <View className="flex-row items-center">
              <Icon name="place" size={20} color={Color.White} />
              <Text className="ml-2 text-white">
                {truncate(data.location_string, 15)}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
