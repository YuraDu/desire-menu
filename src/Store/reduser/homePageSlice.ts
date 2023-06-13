import { createSlice } from "@reduxjs/toolkit";

export interface IHomePage {
  currentLanguage: string;
}

const initialState: IHomePage = {
  currentLanguage: "ru",
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setCurrentLanguage(state: IHomePage, action) {
      state.currentLanguage = action.payload;
    },
  },

  extraReducers: {},
});

export const { setCurrentLanguage } = homePageSlice.actions;

export default homePageSlice;
