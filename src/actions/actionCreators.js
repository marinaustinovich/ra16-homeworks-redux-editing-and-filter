import { 
    ADD_SERVICE,
    REMOVE_SERVICE,
    CHANGE_SERVICE_FIELD,
    UPDATE_SERVICE,
    RESET_SERVICE_FIELD,
    LOAD_SERVICE_DATA,
    SET_FILTER,
    RESET_FILTER
} from './actionTypes';

export function addService(name, price) {
    return {type: ADD_SERVICE, payload: {name, price}};
}

export function removeService(id) {
    return {type: REMOVE_SERVICE, payload: {id}};
}

export function changeServiceField(name, value) {
    return {type: CHANGE_SERVICE_FIELD, payload: {name, value}};
}

export function updateService(id, name, price) {
    return {type: UPDATE_SERVICE, payload: {id, name, price}};
}

export function resetServiceField() {
    return {type: RESET_SERVICE_FIELD};
}

export function loadServiceData(item) {
    return {type: LOAD_SERVICE_DATA, payload: {item}};
}

export function setFilter(filter) {
    return { type: SET_FILTER, payload: { filter }};
};

export function resetFilter() {
    return { type: RESET_FILTER };
};