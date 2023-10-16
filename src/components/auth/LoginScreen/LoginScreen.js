import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email) {
      setError('Email is required.');
      return;
    }
    if (!password) {
      setError('Password is required.');
      return;
    }
    
    // Replace the following line with your actual login logic.
    // For this example, we'll assume the login is successful if both email and password are not empty.
    if (email && password) {
      // Navigate to the NavigationBar screen
      navigation.navigate('Navbar');
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Logo */}
        <Image
          source={require('../../../assets/images/logo.png')}
          style={styles.logo}
        />

        {/* Car Image */}
        <Image
          source={require('../../../assets/images/blueCar.png')}
          style={styles.carImage}
        />

        <Text style={styles.text}> Login in your account </Text>

        {/* Email and Password Inputs */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        {/* Error message */}
        {error ? <Text style={styles.error}>{error}</Text> : null}

        {/* Forgot Password */}
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Don't have an Account? Signup */}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signupLink}>Signup</Text>
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
    padding: 20,
    marginTop: 90,
  },
  carImage: {
    width: 200,
    height: 200,
  },

  text: {
    position: 'relative',
    alignSelf: 'flex-start',
    fontSize: 15,
  },
  input: {
    width: '100%',
    height: 60,
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
  loginButton: {
    backgroundColor: '#27374D',
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 50,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  signupText: {
    color: '#27374D',
  },
  signupLink: {
    color: 'blue',
    marginLeft: 5,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});
