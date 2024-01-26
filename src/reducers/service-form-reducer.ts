import {
  CHANGE_SERVICE_FIELD,
  RESET_SERVICE_FIELD,
  LOAD_SERVICE_DATA,
} from "../store/types";

export type ServiceFormState = {
  id: string;
  name: string;
  price: string;
  isEditing: boolean;
};

const initialState: ServiceFormState = {
  id: "",
  name: "",
  price: "",
  isEditing: false,
};
interface ChangeServiceFieldAction {
  type: typeof CHANGE_SERVICE_FIELD;
  payload: { name: keyof ServiceFormState; value: string };
}

interface ResetServiceFieldAction {
  type: typeof RESET_SERVICE_FIELD;
}

interface LoadServiceDataAction {
  type: typeof LOAD_SERVICE_DATA;
  payload: { item: ServiceFormState };
}

type ServiceFormActions =
  | ChangeServiceFieldAction
  | ResetServiceFieldAction
  | LoadServiceDataAction;

export const serviceFormReducer = (
  state: ServiceFormState = initialState,
  action: ServiceFormActions
): ServiceFormState => {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      return { ...state, [action.payload.name]: action.payload.value };
    case RESET_SERVICE_FIELD:
      return { ...initialState };
    case LOAD_SERVICE_DATA:
      return {
        ...state,
        id: action.payload.item.id,
        name: action.payload.item.name,
        price: action.payload.item.price,
        isEditing: action.payload.item.isEditing,
      };
    default:
      return state;
  }
};
