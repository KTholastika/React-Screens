import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export default function Registerscreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const registerUser = async () => {
    if (username === '' || password === '') {
      setMsg('All fields required');
      return;
    }

    const user = { username, password };
    await AsyncStorage.setItem('userData', JSON.stringify(user));

    setMsg('Registration successful');

    // Navigate to login after registration
    navigation.replace('Login');
  };

  return (
    <View style={{ padding: 20, flex: 1, justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Register</Text>

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{ borderWidth: 1, marginBottom: 15, padding: 10, borderRadius: 5 }}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ borderWidth: 1, marginBottom: 15, padding: 10, borderRadius: 5 }}
      />

      <Button title="Register" onPress={registerUser} />
      <Text style={{ marginTop: 10, color: 'green' }}>{msg}</Text>
    </View>
  );
}
