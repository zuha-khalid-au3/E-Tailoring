import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SelectGenderScreen = () => {
  const [gender, setGender] = useState(null);
  const [height, setHeight] = useState({ feet: 5, inches: 11 });
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Mandates</Text>
        <Text style={styles.question}>What's your Gender?</Text>
        <View style={styles.genderButtons}>
          <TouchableOpacity
            style={[styles.genderButton, gender === 'male' && styles.selectedGender]}
            onPress={() => setGender('male')}
          >
            <Text style={styles.genderButtonText}>👨 Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderButton, gender === 'female' && styles.selectedGender]}
            onPress={() => setGender('female')}
          >
            <Text style={styles.genderButtonText}>👩 Female</Text>
          </TouchableOpacity>
        </View>
        {/* ... rest of the component remains the same */}
      </View>
    </ImageBackground>
  );
};

// ... styles remain the same

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.5,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  genderButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  genderButton: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#8B5CF6',
  },
  selectedGender: {
    backgroundColor: '#8B5CF6',
  },
  genderButtonText: {
    fontSize: 16,
  },
  heightPicker: {
    // Implement height picker styles
  },
  clothingOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  clothingOption: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#8B5CF6',
  },
  submitButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SelectGenderScreen;