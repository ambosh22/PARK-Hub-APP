import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CustomHeader from '../../header/CustomHeader';

export default function HomeScreen({ navigation }) {
  const handleNotificationPress = () => {
    navigation.navigate('Notifications');
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        title="Home"
        onNotificationPress={handleNotificationPress}
        logo={require('../../../assets/images/logo.png')}
      />

      <View style={styles.box}>
        <View style={styles.nameContainer}>
          <Image source={require('../../../assets/images/profile.jpg')} style={styles.profileImage} />
          <Text style={styles.nameText}>ALLEN WALTER</Text>
        </View>
        <Text style={styles.spotsText}>Available Spots: 18/25</Text>
      </View>
      <Text style={styles.parkingText}>Parking</Text>
      <View style={styles.zoneCounterpartContainer}>
        <Text style={styles.zoneText}>Zone 7</Text>
        <Text style={styles.counterpartText}>P20/1hr</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonBox}
          onPress={() => handleButtonPress(1)}
        >
          <Text style={styles.buttonText}>1hr </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonBox}
        >
          <Text style={styles.buttonText}>5hrs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonBox}
        >
          <Text style={styles.buttonText}>8hrs</Text>
        </TouchableOpacity>
        
      </View>
      <TouchableOpacity style={styles.Button} >
          <Text style={styles.ButtonText}>START NOW</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }, 
 Button: {
    backgroundColor: '#27374D',
    width: '80%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 90,
    left:40,
    
    boxShadow: '0px 0px 5px 1px rgba(0, 0,  0.9)',
  },
  ButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  box: {
    backgroundColor: '#27374D',
    padding: 20,
    marginTop: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    left: 40,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    right: 20,
  },
  nameText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
    left: 10,
  },
  spotsText: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
    right: 70,
    fontWeight: 'bold',
  },
  parkingText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    left: 50,
  },
  zoneCounterpartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 60,
    top: 10,
  },
  zoneText: {
    color: 'black',
    fontSize: 16,
  },
  counterpartText: {
    color: 'black',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40, color: 'grey',
    paddingHorizontal:70,
  },
  buttonBox: {
    backgroundColor: 'white',
    width: 60,
    height: 60, 
    borderRadius: 15, 
    alignItems: 'center',
    justifyContent: 'center',
   
    boxShadow: '0px 0px 5px 2px rgba(0, 0, 0, 0.2)',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
