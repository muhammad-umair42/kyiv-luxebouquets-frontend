import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
      console.log(action.payload);
    },
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload._id;
      const indexToRemove = state.cartItems.findIndex(
        item => String(item._id) === String(itemIdToRemove),
      );

      if (indexToRemove !== -1) {
        // Create a new array without the item at the found index
        const newCartItems = [
          ...state.cartItems.slice(0, indexToRemove),
          ...state.cartItems.slice(indexToRemove + 1),
        ];

        return {
          ...state,
          cartItems: newCartItems,
        };
      }

      return state;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
