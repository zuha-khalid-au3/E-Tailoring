import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ClothingSelectionScreen = ({ type, imageUrl }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  const options = ['Fabric', 'Color', 'Button', 'Thread', 'Collar', 'Cuffs'];
  const sizes = ['S', 'M', 'L', 'XL'];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{type}</Text>
        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartButtonText}>🛒</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="🔍 Search"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Image source={{ uri: imageUrl }} style={styles.clothingImage} />
      <View style={styles.optionsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity key={index} style={styles.optionButton}>
            <Text style={styles.optionButtonText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.brandContainer}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/50x50/FF0000/FFFFFF?text=R' }} 
          style={styles.brandLogo} 
        />
        <Text style={styles.brandName}>Raymond</Text>
      </View>
      <View style={styles.sizesContainer}>
        {sizes.map((size, index) => (
          <TouchableOpacity key={index} style={styles.sizeButton}>
            <Text style={styles.sizeButtonText}>{size}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceLabel}>Amount</Text>
        <Text style={styles.priceValue}>₹ 1,900</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cartButton: {
    padding: 10,
  },
  cartButtonText: {
    fontSize: 24,
  },
  searchInput: {
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
  },
  clothingImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#F0F0F0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  optionButtonText: {
    color: '#8B5CF6',
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  brandLogo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  brandName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sizesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  sizeButton: {
    borderWidth: 1,
    borderColor: '#8B5CF6',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  sizeButtonText: {
    color: '#8B5CF6',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  priceValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B5CF6',
  },
});

export default ClothingSelectionScreen;