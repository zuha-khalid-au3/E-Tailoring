import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SelectGenderScreen = () => {
  const [gender, setGender] = useState(null);
  const [height, setHeight] = useState({ feet: 5, inches: 11 });
  const [topWear, setTopWear] = useState(false);
  const [bottomWear, setBottomWear] = useState(false);
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate('Camera');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Mandates</Text>
        <View style={styles.card}>
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
          <Text style={styles.question}>What's your Height?</Text>
          <View style={styles.heightPicker}>
            <Text style={styles.heightText}>{height.feet} ft {height.inches} in (180.34 cm)</Text>
          </View>
          <Text style={styles.question}>What you'll get stitched?</Text>
          <View style={styles.stitchOptions}>
            <View style={styles.stitchOption}>
              <Text>Top Wear</Text>
              <Switch
                value={topWear}
                onValueChange={setTopWear}
                trackColor={{ false: "#767577", true: "#8B5CF6" }}
                thumbColor={topWear ? "#f4f3f4" : "#f4f3f4"}
              />
            </View>
            <View style={styles.stitchOption}>
              <Text>Bottom Wear</Text>
              <Switch
                value={bottomWear}
                onValueChange={setBottomWear}
                trackColor={{ false: "#767577", true: "#8B5CF6" }}
                thumbColor={bottomWear ? "#f4f3f4" : "#f4f3f4"}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: 'white',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 60,
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  genderButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  genderButton: {
    backgroundColor: '#F0F0F0',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
  },
  selectedGender: {
    backgroundColor: '#8B5CF6',
  },
  genderButtonText: {
    fontSize: 16,
  },
  heightPicker: {
    marginBottom: 20,
  },
  heightText: {
    fontSize: 16,
    textAlign: 'center',
  },
  stitchOptions: {
    marginBottom: 20,
  },
  stitchOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SelectGenderScreen;