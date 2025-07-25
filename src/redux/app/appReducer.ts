import { type CaseReducer, type PayloadAction } from "@reduxjs/toolkit";

import { type AppState } from "@/redux/app/appState";

export const setTheme: CaseReducer<
  AppState,
  PayloadAction<AppState["theme"]>
> = (state, action) => {
  state.theme = action.payload;
};

export const setLanguage: CaseReducer<
  AppState,
  PayloadAction<AppState["language"]>
> = (state, action) => {
  state.language = action.payload;
};
