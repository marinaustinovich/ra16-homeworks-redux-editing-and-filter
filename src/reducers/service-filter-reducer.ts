import { RESET_FILTER, SET_FILTER } from "../store/types";

export type ServiceFilterState = {
  filter: string;
};

const initialState: ServiceFilterState = {
  filter: "",
};

interface SetFilterAction {
  type: typeof SET_FILTER;
  payload:  string ;
}

interface ResetFilterAction {
  type: typeof RESET_FILTER;
}

type ServiceFilterActions = SetFilterAction | ResetFilterAction;

export const serviceFilterReducer = (
  state: ServiceFilterState = initialState,
  action: ServiceFilterActions
): ServiceFilterState => {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, filter: action.payload };
    case RESET_FILTER:
      return { ...state, filter: "" };
    default:
      return state;
  }
};
