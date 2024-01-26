import { nanoid } from "nanoid";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ServiceType = {
  id: string;
  name: string;
  price: number;
};

export type ServiceListState = {
  serviceList: ServiceType[];
};

export const initialState: ServiceListState = {
  serviceList: [
    { id: nanoid(), name: "Замена стекла", price: 21000 },
    { id: nanoid(), name: "Замена дисплея", price: 25000 },
  ],
};

const serviceListSlice = createSlice({
  name: "serviceList",
  initialState,
  reducers: {
    addService: (state, action: PayloadAction<Omit<ServiceType, "id">>) => {
      state.serviceList.push({ id: nanoid(), ...action.payload });
    },
    removeService: (state, action: PayloadAction<string>) => {
      state.serviceList = state.serviceList.filter(
        (service) => service.id !== action.payload
      );
    },
    updateService: (state, action: PayloadAction<ServiceType>) => {
      state.serviceList = state.serviceList.map((service) =>
        service.id === action.payload.id
          ? {
              ...service,
              name: action.payload.name,
              price: action.payload.price,
            }
          : service
      );
    },
  },
});

export const { addService, removeService, updateService } =
  serviceListSlice.actions;
export const serviceListReducer = serviceListSlice.reducer;
