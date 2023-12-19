import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import HomeNavigation from "./HomeNavigation";
import ProfileNavigation from "./ProfileNavigation";
import { DetailsScreen } from "../../screens/tabs/details";

const Stack = createStackNavigator<TabNavigationType>();

export default function TabNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
        animationEnabled: true,
        gestureEnabled: true,
        gestureDirection: "horizontal",
      }}
    >
      <Stack.Screen name="HomeNavigation" component={HomeNavigation} />
      <Stack.Screen name="DetailsNavigation" component={DetailsScreen} />
      <Stack.Screen name="ProfileNavigation" component={ProfileNavigation} />
    </Stack.Navigator>
  );
}
