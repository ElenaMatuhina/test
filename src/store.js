import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import axios from 'axios';
import * as api from './config';
import { themeReducer } from './features/theme/theme-slice';
import { controlReduser } from './features/controls/control-slice';
import { countryReducer } from './features/countries/country-slice';
import { detailReducer } from './features/details/detail-slice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    controls: controlReduser,
    countries: countryReducer,
    details: detailReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false, //проверка на сериализацию, возникала при работе с axios
    }),
});
