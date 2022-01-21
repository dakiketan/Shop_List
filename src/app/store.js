import { configureStore } from '@reduxjs/toolkit';
import ShopSlice from '../features/ShopSlice';

export const store = configureStore({
    reducer:{
        shop: ShopSlice,
    },
})