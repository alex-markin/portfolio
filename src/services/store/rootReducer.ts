
import { combineReducers } from '@reduxjs/toolkit';
import { modalSlice } from './slices/modalSlice';
import { burgerMenuSlice } from './slices/burgerMenuSlice';

export const rootReducer = combineReducers({
  modal: modalSlice.reducer,
  burgerMenu: burgerMenuSlice.reducer,

});