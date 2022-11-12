import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadCountryByName = createAsyncThunk(
  '@@details/load-country-by-name',
  (name, { extra: { client, api } }) => {
    return client.get(api.searchByCountry(name));
  }
);

export const loadingNetCountries = createAsyncThunk(
  '@@details/load-neighbors',
  (borders, { extra: { client, api } }) => {
    return client.get(api.filterByCode(borders));
  }
);

const initialState = {
  currentCountry: null,
  neighbors: [],
  status: 'idle',
  error: null,
};

export const detailSlice = createSlice({
  name: '@@detail',
  initialState,
  reducers: {
    clearDetails: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCountryByName.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadCountryByName.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || action.meta.error;
      })
      .addCase(loadCountryByName.fulfilled, (state, action) => {
        state.status = 'idle';
        state.currentCountry = action.payload.data[0];
      })
      .addCase(loadingNetCountries.fulfilled, (state, action) => {
        state.status = 'idle';
        state.neighbors = action.payload.data.map((country) => country.name);
      });
  },
});

export const detailReducer = detailSlice.reducer;
export const { clearDetails } = detailSlice.actions;
export const selectDetail = (state) => state.details;
export const selectNetCountries = (state) => state.details.neighbors;
