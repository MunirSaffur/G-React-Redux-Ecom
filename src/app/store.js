import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../features/items/itemsSlice';
import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    ItemsFetcher: itemsReducer,
    CartKeeper: cartReducer
  },
});
