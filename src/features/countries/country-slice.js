import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadingCountry = createAsyncThunk(
  '@@countries/load-countries',
  (_, { extra: { client, api } }) => {
    return client.get(api.ALL_COUNTRIES);
  }
);

const initialState = {
  status: 'idle',
  error: null,
  list: [],
};

const countrySlice = createSlice({
  name: '@@countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadingCountry.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadingCountry.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || action.meta.error;
      })
      .addCase(loadingCountry.fulfilled, (state, action) => {
        state.status = 'received';
        state.list = action.payload.data;
      });
  },
});

export const countryReducer = countrySlice.reducer;

export const selectCountriesInfo = (state) => ({
  status: state.countries.status,
  error: state.countries.error,
  qty: state.countries.list.length,
});

export const selectAllCountries = (state) => state.countries.list;

export const selectVisibleCountries = (state, { search = '', region = '' }) => {
  return state.countries.list.filter(
    (country) =>
      country.name.toLowerCase().includes(search.toLowerCase()) && country.region.includes(region)
  );
};
