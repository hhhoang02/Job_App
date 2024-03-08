// store.ts

import { configureStore } from '@reduxjs/toolkit';
import jobReducer from './slices/jobSlice';
import filterReducer from './slices/filterSlice'; // Add the filter reducer
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    job: jobReducer,
    filter: filterReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
