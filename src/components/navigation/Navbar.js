import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/home/HomeScreen';
import ProfileScreen from '../screen/profile/ProfileScreen';
import SettingsProfile from '../screen/settings/SettingsProfile';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export default function BottomNavigationBar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          }

          // Customize the icon size and color here
          const iconColor = focused ? '#27374D' : '#CCCCCC'; // Change color on focus
          return <MaterialIcons name={iconName} size={30} color={iconColor} />; // Adjust size and color
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: 'transparent', // Make the navigation bar transparent
        },
        tabStyle: {
          height: 60, // Adjust the height to make the navigation bar bigger
        },
        showLabel: false, // Hide labels
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Settings" component={SettingsProfile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
