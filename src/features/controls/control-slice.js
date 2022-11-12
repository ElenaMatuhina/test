import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  region: '',
};

export const controlSlice = createSlice({
  name: '@@control',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setRegions: (state, action) => {
      state.region = action.payload;
    },
    clearFilters: () => initialState,
  },
});

export const { setSearch, setRegions, clearFilters } = controlSlice.actions;
export const controlReduser = controlSlice.reducer;

export const searchSelector = (state) => state.controls.search;

export const searchRegion = (state) => state.controls.region;

export const selectControls = (state) => state.controls;
