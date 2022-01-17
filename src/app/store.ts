import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import loaderReducer from "../slices/loader";
import heroReducer from "../slices/hero";

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    hero: heroReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
