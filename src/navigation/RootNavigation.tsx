import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import AuthNavigation from "./AuthNavigation";
import TabNavigation from "./TabNavigation";
import { useUserStore } from "../store/useUserStore";

const Stack = createStackNavigator<RootNavigationType>();

export default function RootNavigation() {
  const session = useUserStore(state => state.session);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
          animationEnabled: true,
          gestureEnabled: true,
          gestureDirection: "horizontal",
        }}
      >
        {session && session.user ? (
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
        ) : (
          <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
