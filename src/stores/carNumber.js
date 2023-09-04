import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   number: null
}

const carNumber = createSlice({
   name: 'carNumberSlice',
   initialState,
   reducers: {
      setCarNumber: (state, action) => {
         state.number = action.payload
      }
   }
});


export const { setCarNumber } = carNumber.actions;

export default carNumber.reducer;