import "react-native-gesture-handler";

import { useEffect } from "react";
import { View } from "react-native";

import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { useCachedResources } from "./src/hooks";
import RootNavigation from "./src/navigation/RootNavigation";
import { useUserStore } from "./src/store/useUserStore";

export default function App() {
  const isLoadingComplete = useCachedResources();

  const session = useUserStore(state => state.session);

  const user = useUserStore(state => state.user);

  useEffect(() => console.log(user, session), [user, session]);

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <Container>
      <StatusBar style="auto" />

      <RootNavigation />
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
`;
