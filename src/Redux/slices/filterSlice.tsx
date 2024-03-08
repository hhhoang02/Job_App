// filterSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store'; // Adjust the path

interface FilterState {
  filterJobType: string | null;
  filterSalary: number | null; // Change the type to number
}

const initialState: FilterState = {
  filterJobType: null,
  filterSalary: null,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterJobType: (state, action: PayloadAction<string | null>) => {
      state.filterJobType = action.payload;
    },
    setFilterSalary: (state, action: PayloadAction<number | null>) => {
      state.filterSalary = action.payload;
    },
  },
});
export const { setFilterJobType, setFilterSalary } = filterSlice.actions;

export const selectFilterJobType = (state: RootState) => state.filter.filterJobType;
export const selectFilterSalary = (state: RootState) => state.filter.filterSalary;
export default filterSlice.reducer;
