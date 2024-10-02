import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const customizationOptions = ['Fabric', 'Brand', 'Colour', 'Button', 'Thread', 'Stitches', 'Collar', 'Cuffs'];
const dummyBrands = ['Raymond', 'Van Heusen', 'Arrow', 'Louis Philippe', 'Peter England', 'Park Avenue'];

const SelectShirtScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [amount, setAmount] = useState(1900);

  useEffect(() => {
    // Simulate price change based on selections
    if (selectedBrand) {
      setAmount(prevAmount => prevAmount + Math.floor(Math.random() * 500));
    }
  }, [selectedBrand, selectedOption]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="menu" size={24} color="black" />
        <Text style={styles.headerTitle}>Top Wear</Text>
        <Ionicons name="cart-outline" size={24} color="black" />
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="🔍 Search"
      />

      <View style={styles.contentContainer}>
        <Image
          source={{ uri: 'https://example.com/shirt-image.jpg' }}
          style={styles.shirtImage}
        />

        <ScrollView style={styles.optionsContainer}>
          {customizationOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.optionButton, selectedOption === option && styles.selectedOption]}
              onPress={() => setSelectedOption(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.brandContainer}>
        <Text style={styles.brandTitle}>Brand chosen</Text>
        <View style={styles.selectedBrandContainer}>
          {selectedBrand && (
            <>
              <View style={styles.brandLogo} />
              <Text style={styles.brandName}>{selectedBrand}</Text>
            </>
          )}
        </View>
      </View>

      <ScrollView horizontal style={styles.brandScroll}>
        {dummyBrands.map((brand, index) => (
          <TouchableOpacity
            key={index}
            style={styles.brandButton}
            onPress={() => setSelectedBrand(brand)}
          >
            <Text style={styles.brandButtonText}>{brand}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.amountContainer}>
        <Text style={styles.amountLabel}>Amount</Text>
        <Text style={styles.amountValue}>₹ {amount.toLocaleString()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  shirtImage: {
    width: '60%',
    aspectRatio: 3/4,
    borderRadius: 10,
  },
  optionsContainer: {
    width: '35%',
  },
  optionButton: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  selectedOption: {
    backgroundColor: '#8b5cf6',
  },
  optionText: {
    textAlign: 'center',
  },
  brandContainer: {
    marginBottom: 20,
  },
  brandTitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  selectedBrandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  brandLogo: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    marginRight: 10,
  },
  brandName: {
    fontWeight: 'bold',
  },
  brandScroll: {
    marginBottom: 20,
  },
  brandButton: {
    padding: 10,
    marginRight: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  brandButtonText: {
    color: '#8b5cf6',
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amountLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  amountValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8b5cf6',
  },
});

export default SelectShirtScreen;