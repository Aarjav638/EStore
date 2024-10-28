import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CartState, Product} from '../../constants/types';

const initialCartState: CartState = {
  cartItems: [],
  addedToCart: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<Product>) => {
      const existingItemIndex = state.cartItems.findIndex(
        item => item.id === action.payload.id,
      );

      if (existingItemIndex !== -1) {
        state.cartItems[existingItemIndex].quantity =
          (state.cartItems[existingItemIndex].quantity ?? 1) +
          (action.payload.quantity ?? 1);
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }
      state.addedToCart = true;
    },
    removeFromCart: (state: CartState, action: PayloadAction<{id: number}>) => {
      const existingItemIndex = state.cartItems.findIndex(
        item => item.id === action.payload.id,
      );

      if (existingItemIndex !== -1) {
        const existingItem = state.cartItems[existingItemIndex];

        if ((existingItem.quantity ?? 1) > 1) {
          existingItem.quantity = (existingItem.quantity ?? 1) - 1;
        } else {
          state.cartItems.splice(existingItemIndex, 1);
        }
      }
    },
  },
});

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
