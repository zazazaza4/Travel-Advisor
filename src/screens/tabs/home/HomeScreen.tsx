import { useState } from "react";
import { TouchableOpacity, View } from "react-native";

// eslint-disable-next-line import/no-unresolved
import { GOOGLE_KEY } from "@env";
import { Ionicons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";

import { TypeEnum } from "../../../api/travelApi";
import { Categories } from "../../../components/Categories";
import { Places } from "../../../components/Places";
import { Heading } from "../../../components/ui";
import { categories } from "../../../constants/categories";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState<TypeEnum>(
    TypeEnum.HOTELS,
  );
  const [bl_lat, setBl_lat] = useState();
  const [bl_lng, setBl_lng] = useState();
  const [tr_lat, setTr_lat] = useState();
  const [tr_lng, setTr_lng] = useState();

  const { navigate }: NavigationProp<TabNavigationType> = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="bg-primary h-44 px-5 py-3 mb-16">
        <View className="flex justify-end items-end">
          <TouchableOpacity
            className="bg-white h-10 w-10 rounded-full justify-center items-center border border-gray-700"
            onPress={() => navigate("ProfileNavigation")}
          >
            <Ionicons name="person" size={12} color="#000" />
          </TouchableOpacity>
        </View>

        <View className="flex-1">
          <Heading>Explore the</Heading>
          <Heading className="mb-4">beautiful places</Heading>
          <View className="h-20 w-full bg-white rounded-10 flex-row px-3 items-center gap-x-2 shadow-2xl shadow-black rounded-md justify-center">
            <Icon name="search" size={28} />

            <GooglePlacesAutocomplete
              placeholder="Searching..."
              minLength={2}
              listViewDisplayed="auto"
              fetchDetails
              debounce={400}
              styles={{
                textInputContainer: {
                  backgroundColor: "rgba(0,0,0,0)",
                  borderTopWidth: 0,
                  borderBottomWidth: 0,
                },
                textInput: {
                  marginLeft: 0,
                  marginRight: 0,
                  height: 40,
                  color: "#5d5d5d",
                  fontSize: 16,
                },
                predefinedPlacesDescription: {
                  color: "#1faadb",
                },
              }}
              onPress={(
                data: GooglePlaceData,
                details: GooglePlaceDetail | null,
              ) => {
                setBl_lat(details?.geometry?.viewport?.southwest?.lat);
                setBl_lng(details?.geometry?.viewport?.southwest?.lng);
                setTr_lat(details?.geometry?.viewport?.northeast?.lat);
                setTr_lng(details?.geometry?.viewport?.northeast?.lng);
              }}
              query={{
                key: GOOGLE_KEY,
                language: "en",
              }}
              onFail={err => console.log(err)}
            />
          </View>
        </View>
      </View>
      <Categories
        items={categories}
        selected={activeCategory}
        onChangeCategory={(type: TypeEnum) => setActiveCategory(type)}
      />
      <View className="px-2">
        <Heading className="text-dark text-2xl mt-5">Places</Heading>
        <Places
          type={activeCategory}
          boundary={{
            bl_latitude: bl_lat,
            bl_longitude: bl_lng,
            tr_latitude: tr_lat,
            tr_longitude: tr_lng,
          }}
        />
      </View>
    </SafeAreaView>
  );
}
