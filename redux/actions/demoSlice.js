import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 10,
  string: "Hello Znjs!",
  loading: false,
  error: false,
};

const demoSlice = createSlice({
  name: "demo",
  initialState,
  reducers: {
    updateNumber: (state, action) => {
      state.number = action.payload.number;
    },
    updateString: (state, action) => {
      state.string = action.payload.string;
    },
  },
});

export const demoReducer = demoSlice.reducer;
export const { updateNumber, updateString } = demoSlice.actions;
