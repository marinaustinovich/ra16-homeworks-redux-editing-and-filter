import {CHANGE_SERVICE_FIELD, RESET_SERVICE_FIELD, LOAD_SERVICE_DATA} from '../actions/actionTypes';

const initialState = {
    id: '',
    name: '',
    price: '',
    isEditing: false,
};

export default function serviceAddReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SERVICE_FIELD:
            const {name, value} = action.payload;
            return {...state, [name]: value};
        case RESET_SERVICE_FIELD:
            return {...initialState};
        case LOAD_SERVICE_DATA:
            const {item} = action.payload;
            return {...state, id: item.id, name: item.name, price: item.price, isEditing: !item.isEditing};
        default:
            return state;
    }
}