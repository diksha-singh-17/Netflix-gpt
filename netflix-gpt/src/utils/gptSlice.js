import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSerach: false,
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.showGptSerach = !state.showGptSerach;
    },
  },
});

export const { toggleGptSearch } = gptSlice.actions;
export default gptSlice.reducer;
