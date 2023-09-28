import { RootState } from "./store";

export const getModalState = (state: RootState) => state.modal;
export const getMenuState = (state: RootState) => state.burgerMenu;
