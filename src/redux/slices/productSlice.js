import { createSlice } from '@reduxjs/toolkit';
import { FoodData } from '../../assets/Data/FoodData';



const foods = {
    products: FoodData
}

const productSlice = createSlice({
    name: "products",
    initialState: foods,
    reducers: {
    }
});

export const { } = productSlice.actions

export default productSlice.reducer

