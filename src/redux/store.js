import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/apiSlice";
import userSlice from "./features/userSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([apiSlice.middleware]),
  devTools: process.env.NODE_ENV !== "production",
});
