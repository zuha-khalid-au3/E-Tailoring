import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedType } from '../redux/store';
import ClothingSelectionScreen from './ClothingSelectionScreen';

const SelectShirtScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setSelectedType('Top Wear'));
  }, [dispatch]);

  return <ClothingSelectionScreen type="Top Wear" route={route} />;
};

export default SelectShirtScreen;