import { createSlice } from '@reduxjs/toolkit';

export const themSlise = createSlice({
  name: '@@theme',
  initialState: 'light',
  reducers: {
    setTheme: (_, action) => action.payload,
  },
});

export const { setTheme } = themSlise.actions;
export const themeReducer = themSlise.reducer;
