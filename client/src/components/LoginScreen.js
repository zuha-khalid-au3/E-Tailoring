import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignIn = () => {
    // Implement sign in logic here
    console.log('Sign in with:', email, password);
  };

  const handleRequestOTP = () => {
    navigation.navigate('OTP');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login.</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email or number"
          placeholderTextColor="#A0A0A0"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#A0A0A0"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.requestOTPButton} onPress={handleRequestOTP}>
          <Text style={styles.requestOTPText}>Request OTP</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    color: 'white',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#A0A0A0',
  },
  signInButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  requestOTPButton: {
    backgroundColor: 'transparent',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8B5CF6',
  },
  requestOTPText: {
    color: '#8B5CF6',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;