import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '../components/LandingScreen';
import LoginScreen from '../components/LoginScreen';
import SelectShirtScreen from '../components/SelectShirtScreen';
import SelectPantScreen from '../components/SelectPantScreen';
// Import other screens as needed

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SelectShirt" component={SelectShirtScreen} />
      <Stack.Screen name="SelectPant" component={SelectPantScreen} />
      {/* Add other screens here */}
    </Stack.Navigator>
  );
};

export default AppNavigator;