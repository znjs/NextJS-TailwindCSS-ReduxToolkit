import { configureStore } from "@reduxjs/toolkit";
import { demoReducer } from "./actions/demoSlice";

export const store = configureStore({
  reducer: { demo: demoReducer },
});
