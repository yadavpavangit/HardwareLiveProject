import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: [],

  reducers: {
    addToProductDetailes(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addToProductDetailes } = productSlice.actions;
export default productSlice.reducer;
