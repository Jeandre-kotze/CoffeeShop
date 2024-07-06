import { createSlice, configureStore } from "@reduxjs/toolkit";
import { FakeProducts } from "../src/assets/FakeProducts";

const initialState = {
  cartItems: [],
  productItems: FakeProducts,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    removeItem(state, action) {
      // Use filter to create a new array 
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
    state.totalAmount = state.totalAmount - action.payload.price;
    },
    addItem(state, action) {
      // Use unshift to add the new item to the beginning of the array
      state.cartItems.unshift(action.payload);
      state.totalAmount = state.totalAmount + action.payload.price;

    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const cartActions = cartSlice.actions;
export default store;
