import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ServiceFilterState = {
  filter: string;
};

const initialState: ServiceFilterState = {
  filter: "",
};

const serviceFilterSlice = createSlice({
  name: 'serviceFilter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    resetFilter: (state) => {
      state.filter = '';
    },
  },
});

export const { setFilter, resetFilter } = serviceFilterSlice.actions;
export const serviceFilterReducer =  serviceFilterSlice.reducer;
