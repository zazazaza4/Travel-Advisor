import { useState } from "react";
import {
  ImageBackground,
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { RouteProp, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Heading } from "../../../components/ui";
import { Color } from "../../../constants/color";
import { PlaceType } from "../../../types/placeType";

interface DetailsScreenProps {
  route?: RouteProp<{ params: { param: PlaceType } }, "params">;
}

export function DetailsScreen({ route }: DetailsScreenProps): JSX.Element {
  const data: PlaceType | undefined = route?.params?.param;
  const [isBooked, setIsBooked] = useState<boolean>(false);
  const navigation = useNavigation();

  if (!data) {
    navigation.navigate("Discover" as never);
    return <></>;
  }

  console.log();

  return (
    <SafeAreaView className="flex-1 h-full">
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        style={{ flex: 1 }}
        className="h-full min-h-[50vh]"
        source={
          {
            uri:
              data?.photo?.images?.medium.url ||
              "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg",
          } as ImageSourcePropType
        }
      >
        <View className="absolute top-20 left-4 right-4 flex-row justify-between items-center">
          <TouchableOpacity className="py-3 pl-4 pr-2 rounded-md items-end justify-center bg-primary">
            <Icon
              name="arrow-back-ios"
              size={24}
              color={Color.White}
              onPress={navigation.goBack}
            />
          </TouchableOpacity>
        </View>
        <View className="absolute bottom-4 left-4 right-4 flex-row">
          <Heading className="w-3/4">{data.name}</Heading>
          <View className="flex-row items-center">
            <Icon name="star" size={30} color={Color.Orange} />
            <Text className="text-white font-bold text-2xl ml-1">
              {data?.rating}
            </Text>
          </View>
        </View>
      </ImageBackground>

      <ScrollView className="flex-auto">
        <View className="relative bg-white border-t-2 border-gray-200 pt-10 pb-4 px-4">
          <View className="flex-row mt-2">
            <Icon name="place" size={28} color={Color.Primary} />
            <Text className="ml-2 text-primary font-bold text-2xl">
              {data.location_string}
            </Text>
          </View>
          {data.description && (
            <Text className="mt-4 font-bold text-2xl">About</Text>
          )}
          <Text className="mt-4 mb-4 leading-6">{data.description}</Text>
          {data.cuisine && (
            <View className=" flex-row flex-wrap justify-start items-center gap-2">
              {data.cuisine.map(n => (
                <TouchableOpacity
                  key={n?.key}
                  className="px-2 mx-1 py-1 bg-emerald-100"
                >
                  <Text>{n?.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </ScrollView>

      {data.category.key !== "attraction" && (
        <View className="flex-row justify-center  bg-primary h-24 px-4 rounded-tl-2xl rounded-tr-2xl flex-wrap gap-2">
          {data.price && (
            <View className="flex-row items-center">
              <Text className="text-white text-xl font-bold">{data.price}</Text>
              <Text className="text-gray-500 text-sm ml-1">/PER DAY</Text>
            </View>
          )}

          <TouchableOpacity className="bg-white w-full h-12 rounded-2xl items-center justify-center">
            <Text className="text-primary font-bold text-xl">Book Now</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
