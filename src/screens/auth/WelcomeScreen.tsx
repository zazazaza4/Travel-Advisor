import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import { Heading } from "../../components/ui/Heading";

export default function WelcomeScreen() {
  const { navigate }: NavigationProp<AuthNavigationType> = useNavigation();

  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <ImageBackground
        className="flex-1"
        source={require("../../assets/images/home-bg.jpg")}
        style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
        imageStyle={{ opacity: 0.8 }}
      >
        <SafeAreaView className="flex-1 items-center justify-center relative">
          <View className="items-center justify-center w-full absolute bottom-12 gap-4 px-3">
            <Heading>Discover world with us</Heading>

            <Text className="text-white text-base">
              Travel apps help users to research destinations, find good flight
              and accommodation deals, and book services.
            </Text>

            <View className="flex-0 items-center justify-start my-12">
              <TouchableOpacity
                onPress={() => navigate("Login")}
                className="w-24 h-24  border-r-2 border-l-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center"
              >
                <View className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]">
                  <Text className="text-gray-50 text-4xl font-normal">Go</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
