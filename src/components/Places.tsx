import { ActivityIndicator, FlatList, Text, View } from "react-native";

import { PlaceCard } from "./PlaceCard";
import { BoundaryParams, TypeEnum } from "../api/travelApi";
import { usePlaces } from "../hooks";

export const Places: React.FC<{ type: TypeEnum; boundary: BoundaryParams }> = ({
  boundary,
  type,
}) => {
  const { places, loading, error } = usePlaces(type, boundary);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  if (places && places.length <= 0) {
    return (
      <View className="w-full h-[400px] items-center space-y-8 justify-center">
        <Text className="text-2xl font-semibold text-primary">
          Opps... No Data Found
        </Text>
      </View>
    );
  }

  return (
    <View className="pt-6 h-[66%]">
      <View className="flex-1">
        <FlatList
          contentContainerStyle={{ gap: 10, paddingBottom: 20 }}
          data={places}
          style={{ flex: 1 }}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <PlaceCard data={item} />}
          horizontal={false}
        />
      </View>
    </View>
  );
};
