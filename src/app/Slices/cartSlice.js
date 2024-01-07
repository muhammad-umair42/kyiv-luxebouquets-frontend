import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    removeItem: (state, action) => {
      return {
        state: state.filter(item => item._id !== action.payload),
      };
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
