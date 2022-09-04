import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  cartItems: []
};

export const cartSlice = createSlice({
  name: 'CartKeeper',
  initialState,

  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push({
        name: action.payload.name,
        price: action.payload.price,
        quantity: 1
      })
    },
    rebuildCart: (state, action)=>{
        state.cartItems = action.payload
    }
  },
});

export const { addToCart, rebuildCart } = cartSlice.actions;


export const cartItemsData = (state) => state.CartKeeper.cartItems
export const cartTotal = (state) => state.CartKeeper.cartItems.map(item=>item.price).reduce((partialSum, a) => partialSum + a, 0)


export default cartSlice.reducer;
