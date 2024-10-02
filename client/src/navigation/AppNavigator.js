import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '../components/LandingScreen';
import LoginScreen from '../components/LoginScreen';
import OTPScreen from '../components/OTPScreen';
import SelectGenderScreen from '../components/SelectGenderScreen';
import CameraScreen from '../components/CameraScreen';
import SelectShirtScreen from '../components/SelectShirtScreen';
import SelectPantScreen from '../components/SelectPantScreen';
import ClothingSelectionScreen from '../components/ClothingSelectionScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
      <Stack.Screen name="SelectGender" component={SelectGenderScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="ClothingSelectionScreen" component={ClothingSelectionScreen} />
      <Stack.Screen name="SelectShirt" component={SelectShirtScreen} />
      <Stack.Screen name="SelectPant" component={SelectPantScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;