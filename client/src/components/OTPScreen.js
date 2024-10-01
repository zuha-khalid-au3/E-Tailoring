import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OTPScreen = () => {
  const [otp, setOtp] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    // Navigate to SelectGender screen regardless of OTP entered
    navigation.navigate('SelectGender');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <Image
        source={{ uri: 'https://via.placeholder.com/400x400.png?text=OTP+Verification' }}
        style={styles.illustration}
      />
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.subtitle}>Enter the OTP sent to +91 1234567890</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        placeholderTextColor="#A0A0A0"
        value={otp}
        onChangeText={setOtp}
        keyboardType="number-pad"
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.resendButton}>
        <Text style={styles.resendText}>Didn't receive the OTP? Resend</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: '#000',
  },
  illustration: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 60,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
    padding: 15,
    marginBottom: 20,
  },
  submitButton: {
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
  resendButton: {
    alignItems: 'center',
  },
  resendText: {
    color: '#8B5CF6',
  },
});

export default OTPScreen;