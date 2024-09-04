// screens/SignIn.tsx
import React, { useState } from 'react';

import { router } from 'expo-router';
import { TextInput, Button, View, Text } from 'react-native';
import { useSession } from '@/contexts/ctx';

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderBottomWidth: 1, marginBottom: 10, width: '80%' }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderBottomWidth: 1, marginBottom: 20, width: '80%' }}
      />
      <Button title="Sign In" onPress={handlelogIn} />
    </View>
  );
}
