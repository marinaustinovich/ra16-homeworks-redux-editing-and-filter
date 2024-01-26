import { configureStore } from "@reduxjs/toolkit";
import {
  serviceFilterReducer,
  serviceFormReducer,
  serviceListReducer,
} from "../reducers";

/**
 * @typedef {Object} RootState
 * @property {ReturnType<typeof serviceFormReducer>} serviceForm
 * @property {ReturnType<typeof serviceFilterReducer>} serviceFilter
 * @property {ReturnType<typeof serviceListReducer>} serviceList
 */

const store = configureStore({
  reducer: {
    serviceList: serviceListReducer,
    serviceForm: serviceFormReducer,
    serviceFilter: serviceFilterReducer,
  },
});

export default store;
