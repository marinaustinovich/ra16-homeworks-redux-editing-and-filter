import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ServiceFormState = {
  id: string;
  name: string;
  price: string;
  isEditing: boolean;
};

export const initialServiceFormState: ServiceFormState = {
  id: "",
  name: "",
  price: "",
  isEditing: false,
};

const serviceFormSlice = createSlice({
  name: 'serviceForm',
  initialState: initialServiceFormState,
  reducers: {
    changeServiceField: (state, action: PayloadAction<{ name: keyof ServiceFormState; value: string }>) => {
      const { name, value } = action.payload;
      if (name in state) {
        state[name as keyof ServiceFormState] = value as never;
      }
    },
    resetServiceField: () => initialServiceFormState,
    loadServiceData: (state, action: PayloadAction<ServiceFormState>) => {
      return action.payload;
    }
  },
});

export const { changeServiceField, resetServiceField, loadServiceData } = serviceFormSlice.actions;

export const serviceFormReducer = serviceFormSlice.reducer;
