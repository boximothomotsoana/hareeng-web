import { createSlice } from "@reduxjs/toolkit";

import { setLanguage, setTheme } from "@/redux/app/appReducer";
import { AppInitialState } from "@/redux/app/appState";

const appSlice = createSlice({
  initialState: AppInitialState,
  name: "app",
  reducers: { setLanguage, setTheme },
});

export const appActions = appSlice.actions;
export default appSlice.reducer;
