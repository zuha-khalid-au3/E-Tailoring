import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedType } from '../redux/store';
import ClothingSelectionScreen from './ClothingSelectionScreen';

const SelectPantScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setSelectedType('Bottom Wear'));
  }, [dispatch]);

  return <ClothingSelectionScreen type="Bottom Wear" route={route} />;
};

export default SelectPantScreen;