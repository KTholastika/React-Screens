
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Loginscreen from './screens/Loginscreen';
import Bottomtabs from './navigation/Bottomtabs';
import Registerscreen from './screens/Registerscreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        {/* Auth Screen */}
        <Stack.Screen name='Register' component={Registerscreen} />
        <Stack.Screen name="Login" component={Loginscreen} />

        {/* Main App with Bottom Tabs */}
        <Stack.Screen name="MainTabs" component={Bottomtabs} />

      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}
