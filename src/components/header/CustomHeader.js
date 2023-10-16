import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function CustomHeader({ onNotificationPress, logo }) {
  return (
    <View style={styles.header}>
      {/* Logo */}
      {logo && <Image source={logo} style={styles.logoImage} />}

      {/* Notifications icon */}
      <TouchableOpacity onPress={onNotificationPress}>
        <MaterialIcons name="notifications" size={40} color="#27374D" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    height: 80,
    marginTop: 20, // Add margin-top of 20
    backgroundColor: '#fff', // Customize the background color
  },
  logoImage: {
    width: 160, // Increase the width for a larger logo
    height: 60, // Increase the height for a larger logo
    resizeMode: 'contain', // Ensure that the image fits and maintains its aspect ratio
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
