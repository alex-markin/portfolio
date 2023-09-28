import { createSlice } from "@reduxjs/toolkit";

export type burgerButtonState = {
  menuOpen: boolean;
};

const initialState: burgerButtonState = {
  menuOpen: false,
};

export const burgerMenuSlice = createSlice({
  name: "burgerButton",
  initialState,
  reducers: {
    openMenu(state) {
      state.menuOpen = true;
    },

    closeMenu(state) {
      state.menuOpen = false;
    },

    toggleMenu(state) {
      state.menuOpen = !state.menuOpen;
    },
  },
});
