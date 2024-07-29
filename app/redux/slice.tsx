import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


interface Rating {
  rate: number;
  count: number;
}
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
export interface CounterState {
  cart:Product[]
  products:Product[]
}

const initialState: CounterState = {
  cart:[],
  products:[],
};
export const getProducts = createAsyncThunk("cart/getProducts/", async () => {
  const result = await axios.get( "https://fakestoreapi.com/products");

  return result.data;
});

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart:(state,action)=>{
      state.cart=[...state.cart,action.payload]
    },
    removeCart:(state,action)=>{
      state.cart=state.cart.filter((item)=>item.id!== action.payload)
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(getProducts.fulfilled,(state,action)=>{
      state.products=action.payload
    })
  }
});


export const {addToCart,removeCart} = productsSlice.actions;

export default productsSlice.reducer;
