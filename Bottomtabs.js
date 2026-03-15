import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../screens/Homescreen';
import DetailsScreen from '../screens/DetailsScreen';
import RPatient from '../screens/RPatient';

import { MaterialIcons } from '@expo/vector-icons';
import Notification from '../screens/Notification';

const Tab = createBottomTabNavigator();

export default function Bottomtabs() {
  return (
    <Tab.Navigator 
        screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarStyle: {
      height: 70,
      paddingBottom: 10,
      
    },
      }}>
        <Tab.Screen
            name = 'Home'
            component = {Homescreen}
            options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}/>
        <Tab.Screen
            name = 'Detail'
            component = {DetailsScreen}
            options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="info" size={size} color={color} />
          ),
        }}/>
        <Tab.Screen
            name = 'RP'
            component = {RPatient}
            options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}/>
        <Tab.Screen
            name = 'Notify'
            component = {Notification}
            options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="notifications" size={size} color={color} />
          ),
        }}/>
    </Tab.Navigator>
  );
}
