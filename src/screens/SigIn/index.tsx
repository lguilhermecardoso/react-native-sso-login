import { useState } from 'react';
import {
  Container,
  Title
} from './styles';
import { Button } from '../../components/Button';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Alert } from 'react-native';



GoogleSignin.configure({
  scopes: ['email', 'profile'],
  webClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID,
  iosClientId: process.env.EXPO_PUBLIC_IOS_CLIENT_ID,
});

export function SignIn() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function handleGoogleSignIn() {
    try {
      setIsAuthenticating(true);
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      console.log(error);
      Alert.alert('Google Sign In Error');
    }
    finally {
      setIsAuthenticating(false);
    }

  }
  return (
      <Container>
        <Title>SSO App Test</Title>
        <Button
          title='Google Sign In'
          isLoading={isAuthenticating}
          onPress={handleGoogleSignIn}
        />
      </Container>
  );
}