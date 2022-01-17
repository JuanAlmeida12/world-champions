import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";

export interface LoaderState {
  status: "idle" | "loading" | "failed";
}

const initialState: LoaderState = {
  status: "idle",
};

export const loadSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    open: (state) => {
      state.status = "loading";
    },
    close: (state) => {
      state.status = "idle";
    },
  },
});

export const { open, close } = loadSlice.actions;

export const selectStatus = (state: RootState) => state.loader.status;

export default loadSlice.reducer;
