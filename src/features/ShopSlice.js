import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shops:[],
};

export const shopSlice = createSlice({
    name:"shop",
    initialState,
    reducers:{
        add:(state, action) =>{
            state.shops = [...state.shops, action.payload];
        },

        del:(state, action) =>{
            return{
                ...state.shops,
                shops: state.shops.filter((shop,index) => index !== action.payload),
            }
        }
    }
})

export const { add, del } = shopSlice.actions

export const selectshops = (state) => state.shop.shops;

export default shopSlice.reducer