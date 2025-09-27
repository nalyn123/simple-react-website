import { configureStore } from "@reduxjs/toolkit";
import { userSlice, productsSlice } from "@store/index";

export const store = configureStore({
  reducer: {
    user: userSlice,
    products: productsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
