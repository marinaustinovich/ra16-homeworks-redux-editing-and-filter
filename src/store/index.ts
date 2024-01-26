import { configureStore } from "@reduxjs/toolkit";
import {
  serviceFilterReducer,
  serviceFormReducer,
  serviceListReducer,
  ServiceFormState,
  ServiceFilterState,
  ServiceListState,
} from "./slices";

export interface RootState {
  serviceForm: ServiceFormState;
  serviceFilter: ServiceFilterState;
  serviceList: ServiceListState;
}

const store = configureStore({
  reducer: {
    serviceList: serviceListReducer,
    serviceForm: serviceFormReducer,
    serviceFilter: serviceFilterReducer,
  },
});

export default store;
