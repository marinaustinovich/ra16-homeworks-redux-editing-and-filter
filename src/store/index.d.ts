import { Store } from 'redux';
import { ServiceFormState, ServiceListState, ServiceFilterState } from './path/to/your/types';

export interface RootState {
  serviceForm: ServiceFormState;
  serviceFilter: ServiceFilterState;
  serviceList: ServiceListState;
}

export function configureStore(): Store<RootState>;
