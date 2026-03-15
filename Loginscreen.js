import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export default function Loginscreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const loginUser = async () => {
    const storedUser = await AsyncStorage.getItem('userData');

    if (!storedUser) {
      setMsg('No user registered');
      return;
    }

    const { username: storedUsername, password: storedPassword } =
      JSON.parse(storedUser);

    if (username === storedUsername && password === storedPassword) {
      setMsg('Login successful');

      // ✅ Navigate to MainTabs after login
      navigation.replace('MainTabs'); // replace prevents going back
    } else {
      setMsg('Invalid username or password');
    }
  };

  return (
    <View style={{ padding: 20, flex: 1, justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{
          borderWidth: 1,
          marginBottom: 15,
          padding: 10,
          borderRadius: 5,
        }}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{
          borderWidth: 1,
          marginBottom: 15,
          padding: 10,
          borderRadius: 5,
        }}
      />

      <Button title="Login" onPress={loginUser} />
      <Text style={{ marginTop: 10, color: 'red' }}>{msg}</Text>
    </View>
  );
}
