import { configureStore, createSlice } from '@reduxjs/toolkit';

const clothingSlice = createSlice({
  name: 'clothing',
  initialState: {
    capturedImage: null,
    selectedType: null,
    selectedOptions: {},
    selectedBrand: null,
    selectedSize: null,
    amount: 1900,
  },
  reducers: {
    setCapturedImage: (state, action) => {
      state.capturedImage = action.payload;
    },
    setSelectedType: (state, action) => {
      state.selectedType = action.payload;
    },
    setSelectedOption: (state, action) => {
      state.selectedOptions[action.payload.option] = action.payload.value;
    },
    setSelectedBrand: (state, action) => {
      state.selectedBrand = action.payload;
    },
    setSelectedSize: (state, action) => {
      state.selectedSize = action.payload;
    },
    updateAmount: (state, action) => {
      state.amount = action.payload;
    },
  },
});

export const {
  setCapturedImage,
  setSelectedType,
  setSelectedOption,
  setSelectedBrand,
  setSelectedSize,
  updateAmount,
} = clothingSlice.actions;

export const store = configureStore({
  reducer: {
    clothing: clothingSlice.reducer,
  },
});