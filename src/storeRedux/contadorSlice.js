import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

export const contadorSlice = createSlice({
  name: 'contador',   
  initialState,
  reducers: {
    increment: (state) => state + 1,
    decrement : (state) => state -1,
    increment5:(state, action) => state + action.payload,
    decrement5:(state,action) => state - action.payload,
    reset: () =>  initialState 
  },
});

export const {increment,decrement,increment5,decrement5,reset} = contadorSlice.actions;
export default contadorSlice.reducer