
import { createSlice } from "@reduxjs/toolkit";

const getCartFromStorage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user._id) {
    
    return JSON.parse(localStorage.getItem(`cart_${user._id}`)) || [];
  }
  return []; 
};

const Cartslice = createSlice({
  name: "cart",
  initialState: getCartFromStorage(), 
  reducers: {
    add(state, action) {
      const item = state.find(i => i._id === action.payload._id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      
  
      const user = JSON.parse(localStorage.getItem("user"));
      if(user) localStorage.setItem(`cart_${user._id}`, JSON.stringify(state));
    },

    remove(state, action) {
      const newState = state.filter(i => i._id !== action.payload);
      
      const user = JSON.parse(localStorage.getItem("user"));
      if(user) localStorage.setItem(`cart_${user._id}`, JSON.stringify(newState));
      return newState;
    },

    
    clearCart(state) {
      return [];
    }
  }
});

export const { add, remove, incrementQty, decrementQty, clearCart } = Cartslice.actions;
export default Cartslice.reducer;