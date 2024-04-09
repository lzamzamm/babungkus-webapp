import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slice.js";
import { apiSlice } from "./slices/api.slice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddlerware) =>
    getDefaultMiddlerware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
