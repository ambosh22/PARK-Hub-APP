import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

export default function SettingsProfile({ navigation }) {
  const handleNotificationPress = () => {
    navigation.navigate('Notifications');
  };

  return (
    <View style={styles.container}>
      <Image
        logo={require('../../../assets/images/logo.png')}
        onNotificationPress={handleNotificationPress}
        navigation={navigation}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27374D', 
  },
});
