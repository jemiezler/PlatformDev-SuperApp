// screens/SignIn.tsx
import React, { useState } from 'react';

import { router } from 'expo-router';
import { useSession } from '@/contexts/ctx';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Card, H2, Image, Input, Paragraph, Text, View, XStack, YStack } from 'tamagui'

export default function SignIn() {
  const { logIn } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlelogIn = async () => {
    try {
      await logIn(email, password);
      router.replace('/'); // Navigate to the home page or another route after successful sign-in
    } catch (error) {
      // Handle sign-in error (e.g., show an alert or message)
      console.error("Sign-in error:", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'grey', }}>
      <View padding="$1">
        <Card padded style={{ width: '100%', borderRadius: '24px' }}>
          <H2 paddingBottom="20px">Get Started</H2>
          <YStack paddingBottom="20px">
            <Text fontWeight="700">Welcome to MFU Campus!</Text>
            <Text >Your gateway to campus life and services.</Text>
          </YStack>
          <YStack gap="$2" paddingBottom="20px">
            <Input
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              style={{ borderBottomWidth: 1 }}
            />
            <Input
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={{ borderBottomWidth: 1 }}
            />
          </YStack>
          <Button borderRadius="$6" marginBottom="10px" onPress={handlelogIn} >Continue</Button>
          <Button borderRadius="$6" >Continue</Button>
        </Card>
      </View>
    </SafeAreaView>
  );
}
