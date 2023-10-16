import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function SignupScreen({navigation}) {
  return (
    <ScrollView>
      <View style={styles.container}>

        {/* Logo */}
        <Image
          source={require('../../../assets/images/logo.png')}
          style={styles.logo}
        />

    

        <Text style={styles.text}>Create Your Account  </Text>

        {/* Name Input */}
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          keyboardType="default"
        />

        <TextInput
          style={styles.input}
          placeholder="Given Name"
          keyboardType="default"
        />

         {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />

         {/* Plate Number Input */}
        <TextInput
          style={styles.input}
          placeholder="Plate No."
          keyboardType="default"
        />

         {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
        />

      
        {/* Sign up Button */}
        <TouchableOpacity style={styles.SignupButton}>
          <Text style={styles.SignupButtonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Don't have an Account? Signup */}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Have an account?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.signupLink}>Login Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    marginTop: 50,
  },
  logo: {
    position: 'relative',
    alignSelf: 'center',
    marginBottom: 10,
  },

  text: {
    position: 'relative',
    alignSelf: 'flex-start',
    fontSize: 18,
    paddingBottom: 10,
  },
  input: {
    width: '100%',
    height: 65,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 15,
  },
  forgotPassword: {
    marginTop: 10,
    color: '#27374D',
    position: 'absolute',
    alignItems: 'flex-end',
    marginLeft: 50,
  },
  SignupButton: {
    backgroundColor: '#27374D',
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 25, 
  },
  SignupButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20, // Added marginTop for spacing
  },
  signupText: {
    color: '#27374D',
  },
  signupLink: {
    color: 'blue', // You can use any color you prefer
    marginLeft: 5,
  },
});
