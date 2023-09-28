import { createSlice } from "@reduxjs/toolkit";

export type Modal = {
  isOpen: boolean;
};

const initialState: Modal = {
  isOpen: false,
};


export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal(state) {
      state.isOpen = !state.isOpen;
    },
  },
});