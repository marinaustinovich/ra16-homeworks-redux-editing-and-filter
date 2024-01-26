import { nanoid } from "nanoid";
import { REMOVE_SERVICE, UPDATE_SERVICE, ADD_SERVICE } from "../store/types";


export type ServiceType = {
  id: string;
  name: string;
  price: number;
};

type ServiceListState = {
  serviceList: ServiceType[];
};

interface AddServiceAction {
  type: typeof ADD_SERVICE;
  payload: Omit<ServiceType, "id">;
}

interface RemoveServiceAction {
  type: typeof REMOVE_SERVICE;
  payload: { id: string };
}

interface UpdateServiceAction {
  type: typeof UPDATE_SERVICE;
  payload: ServiceType;
}

type ServiceActions =
  | AddServiceAction
  | RemoveServiceAction
  | UpdateServiceAction;

const initialState: ServiceListState = {
  serviceList: [
    { id: nanoid(), name: "Замена стекла", price: 21000 },
    { id: nanoid(), name: "Замена дисплея", price: 25000 },
  ],
};

export const serviceListReducer = (
  state: ServiceListState = initialState,
  action: ServiceActions
): ServiceListState => {
  switch (action.type) {
    case ADD_SERVICE:
      return {
        ...state,
        serviceList: [
          ...state.serviceList,
          {
            id: nanoid(),
            name: action.payload.name,
            price: action.payload.price,
          },
        ],
      };
    case REMOVE_SERVICE:
      return {
        ...state,
        serviceList: state.serviceList.filter(
          (service) => service.id !== action.payload.id
        ),
      };
    case UPDATE_SERVICE:
      return {
        ...state,
        serviceList: state.serviceList.map((service) =>
          service.id === action.payload.id
            ? {
                ...service,
                name: action.payload.name,
                price: action.payload.price,
              }
            : service
        ),
      };
    default:
      return state;
  }
};
