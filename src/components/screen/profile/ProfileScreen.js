import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';



export default function ProfileSettings({ navigation }) {
  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clear user session and navigate to the login screen
    navigation.navigate('Login');
  };

  const [selectedImage, setSelectedImage] = useState(require('../../../assets/images/profile.jpg')); // Use the default profile image

  const handleImagePick = () => {
    const options = {
      title: 'Select Profile Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        // User canceled image picker
      } else if (response.error) {
        // Handle image picker error
      } else {
        // Set the selected image to the state
        setSelectedImage({ uri: response.uri });
      }
    });
  };

  return (
    <ScrollView style={styles.container}>
      {/* Profile Edit Section */}
      <View style={styles.section}>
        <TouchableOpacity onPress={handleImagePick}>
          <View style={styles.imageContainer}>
            <Image
              source={selectedImage}
              style={styles.profileImage}
            />
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Change Profile Picture</Text>
        </TouchableOpacity>
      </View>

      {/* Options Section */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('AccountDetails')}>
          <Text style={styles.optionText}>Account Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Notifications')}>
          <Text style={styles.optionText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Privacy')}>
          <Text style={styles.optionText}>Privacy</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    
  },
  section: {
    marginBottom: 20,
  },
  
  option: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 70, // Add margin top here
  },
});
