import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { EditProfileScreen, ProfileScreen } from "../../screens/tabs/profile";

const Stack = createStackNavigator<ProfileNavigationType>();

export default function ProfileNavigation() {
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
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
}
