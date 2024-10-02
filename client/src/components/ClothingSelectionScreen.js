import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { clothingData, sizes, basePrice } from '../mockData';
import { setSelectedOption, updateAmount } from '../redux/store';

const customizationOptions = Object.keys(clothingData);

const ClothingSelectionScreen = ({ route, type }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeOption, setActiveOption] = useState('fabric');
  const dispatch = useDispatch();
  const { capturedImage, selectedOptions, amount } = useSelector((state) => state.clothing);

  const clothingType = route?.params?.type || type;

  const calculateTotalPrice = useCallback(() => {
    let total = basePrice;
    Object.entries(selectedOptions).forEach(([option, value]) => {
      const selectedItem = clothingData[option].find(item => item.name === value);
      if (selectedItem) {
        total += selectedItem.price;
      }
    });
    return total;
  }, [selectedOptions]);

  useEffect(() => {
    const newAmount = calculateTotalPrice();
    dispatch(updateAmount(newAmount));
  }, [selectedOptions, dispatch, calculateTotalPrice]);

  const handleOptionPress = useCallback((option) => {
    setActiveOption(option);
  }, []);

  const handleSelectionPress = useCallback((option, value) => {
    dispatch(setSelectedOption({ option, value }));
  }, [dispatch]);

  const renderHorizontalOptions = () => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
      {clothingData[activeOption].map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.horizontalOption,
            selectedOptions[activeOption] === item.name && styles.selectedOption
          ]}
          onPress={() => handleSelectionPress(activeOption, item.name)}
        >
          <Text style={styles.horizontalOptionText}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="menu-outline" size={24} color="#8e8e93" />
        <Text style={styles.title}>{clothingType}</Text>
        <Ionicons name="cart-outline" size={24} color="#ff3b30" />
      </View>
      
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#8e8e93" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      
      <View style={styles.contentContainer}>
        <Image source={{ uri: capturedImage }} style={styles.clothingImage} />
        <View style={styles.optionsContainer}>
          {customizationOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                activeOption === option && styles.activeOption
              ]}
              onPress={() => handleOptionPress(option)}
            >
              <Text style={[
                styles.optionButtonText,
                activeOption === option && styles.activeOptionText
              ]}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      
      <View style={styles.carouselContainer}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="#8e8e93" />
        </TouchableOpacity>
        {renderHorizontalOptions()}
        <TouchableOpacity>
          <Ionicons name="chevron-forward" size={24} color="#8e8e93" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.brandContainer}>
        <Text style={styles.brandLabel}>Brand chosen</Text>
        <View style={styles.selectedBrandContainer}>
          <View style={styles.brandLogo} />
          <Text style={styles.brandName}>Raymond</Text>
        </View>
      </View>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.brandScroll}>
        {['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5'].map((brand, index) => (
          <TouchableOpacity key={index} style={styles.brandButton}>
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
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f7',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    marginLeft: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  clothingImage: {
    width: '75%',
    aspectRatio: 3/4,
    borderRadius: 10,
  },
  optionsContainer: {
    width: '25%',
    paddingLeft: 10,
  },
  optionButton: {
    paddingVertical: 10,
  },
  optionButtonText: {
    color: '#8e8e93',
  },
  activeOption: {
    backgroundColor: '#f2f2f7',
    borderRadius: 5,
  },
  activeOptionText: {
    color: '#5856d6',
  },
  carouselContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  horizontalScroll: {
    flex: 1,
  },
  horizontalOption: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginRight: 10,
    backgroundColor: '#f2f2f7',
    borderRadius: 15,
  },
  selectedOption: {
    backgroundColor: '#5856d6',
  },
  horizontalOptionText: {
    color: '#8e8e93',
  },
  brandContainer: {
    marginBottom: 10,
  },
  brandLabel: {
    fontSize: 16,
    color: '#8e8e93',
    marginBottom: 5,
  },
  selectedBrandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f7',
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
    marginBottom: 15,
  },
  brandButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginRight: 10,
    backgroundColor: '#f2f2f7',
    borderRadius: 15,
  },
  brandButtonText: {
    color: '#5856d6',
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
    color: '#5856d6',
  },
});

export default ClothingSelectionScreen;