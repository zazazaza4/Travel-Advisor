import { useState } from "react";
import { Pressable, TouchableOpacity, View } from "react-native";

import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthApiError } from "@supabase/supabase-js";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

import { Header } from "../../components";
import { RegularText } from "../../components/StyledText";
import { Button, Input } from "../../components/ui";
import { useSupabaseAuth } from "../../hooks";
import {
  doPasswordsMatch,
  isValidEmail,
  isValidPassword,
} from "../../lib/validation";
import { useUserStore } from "../../store/useUserStore";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { navigate }: NavigationProp<AuthNavigationType> = useNavigation();
  const { signUpWithEmail } = useSupabaseAuth();
  const setUser = useUserStore(state => state.setUser);
  const setSession = useUserStore(state => state.setSession);

  const validateInputs = (): boolean => {
    setError(null);

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return false;
    }

    if (!isValidPassword(password)) {
      setError("Password must be at least 8 characters long");
      return false;
    }

    if (!doPasswordsMatch(password, confirmPassword)) {
      setError("Passwords do not match");
      return false;
    }

    return true;
  };

  async function handleSignup() {
    if (!validateInputs()) {
      return;
    }

    setLoading(true);

    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await signUpWithEmail(email, password);

      if (error) {
        setLoading(false);
        if (error instanceof AuthApiError) {
          setError(error.message);
        }
      }

      if (data.user === null || data.session === null) {
        setLoading(false);
      }

      if (data.session && data.user) {
        setSession(data.session);
        setUser(data.user);
      }
      navigate("Login");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <View>
        <StatusBar style="dark" />
        <Header
          title="Sign up"
          description="Fill in the fields below to create an account"
          canGoBack
          screen="Login"
        />

        <InputContainer>
          <Input
            value={email}
            onChangeText={e => setEmail(e)}
            placeholder="Enter a valid email address"
            label="Email"
          />
          <Input
            value={password}
            onChangeText={e => setPassword(e)}
            placeholder="Enter your password"
            isPassword
            label="Password"
          />
          <Input
            value={confirmPassword}
            onChangeText={e => setConfirmPassword(e)}
            placeholder="Re-enter your password"
            isPassword
            label="Confirm Password"
          />
        </InputContainer>
      </View>

      <BottomView>
        {error && <RegularText style={{ color: "red" }}>{error}</RegularText>}
        <Button
          title="Next"
          onPress={() => handleSignup()}
          isLoading={loading}
        />
        <TouchableOpacity onPress={() => navigate("Login")}>
          <RegularText>Already have an account? Head to login</RegularText>
        </TouchableOpacity>
      </BottomView>
    </Container>
  );
}

const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 20px;
  justify-content: space-between;
`;

const InputContainer = styled(View)`
  margin-top: 40px;
  gap: 20px;
`;

const BottomView = styled(View)`
  align-items: center;
  gap: 8px;
`;
