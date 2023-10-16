import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './auth/LoginScreen/LoginScreen';
import SignupScreen from './auth/SignupScreen/SignupScreen';
import Home from './screen/home/HomeScreen';
import Navbar from './navigation/Navbar'; // Import the Navbar screen

const Stack = createNativeStackNavigator();

const Layout = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        
        {/* Add the Navbar screen to the stack */}
        <Stack.Screen name="Navbar" component={Navbar} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Layout;
