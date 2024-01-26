import { ServiceFormState } from "../reducers";
import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  CHANGE_SERVICE_FIELD,
  UPDATE_SERVICE,
  RESET_SERVICE_FIELD,
  LOAD_SERVICE_DATA,
  SET_FILTER,
  RESET_FILTER,
} from "./types";

export const addService = (name: string, price: number) => {
  return { type: ADD_SERVICE, payload: { name, price } };
};

export const removeService = (id: string) => {
  return { type: REMOVE_SERVICE, payload: { id } };
};

export const changeServiceField = (name: string, value: string) => {
  return { type: CHANGE_SERVICE_FIELD, payload: { name, value } };
};

export const updateService = (id: string, name: string, price: number) => {
  return { type: UPDATE_SERVICE, payload: { id, name, price } };
};

export const resetServiceField = () => {
  return { type: RESET_SERVICE_FIELD };
};

export const loadServiceData = (item: ServiceFormState) => {
  return { type: LOAD_SERVICE_DATA, payload: { item } };
};

export const setFilter = (filter: string) => {
  return { type: SET_FILTER, payload: { filter } };
};

export const resetFilter = () => {
  return { type: RESET_FILTER };
};
