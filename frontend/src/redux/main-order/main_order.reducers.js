import * as mainOrder_types from './main_order.types';

const INITIAL_STATE = {
    mainOrderList: [],
    isMainOrderFetching: false,
    errorMainOrderMessage: ''
};


const mainOrderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //Site Order Fetch
        case mainOrder_types.FETCH_MAIN_ORDER_START:
            return {
                ...state,
                isMainOrderFetching: true
            };
        case mainOrder_types.FETCH_MAIN_ORDER_SUCCESS:
            return {
                ...state,
                isMainOrderFetching: false,
                mainOrderList: action.payload
            };
        case mainOrder_types.FETCH_MAIN_ORDER_FAILURE:
            return {
                ...state,
                isMainOrderFetching: false,
                errorMainOrderMessage: action.payload
            };
            //Site Order Add
        case mainOrder_types.ADD_MAIN_ORDER_START:
            return {
                ...state,
                isMainOrderFetching: true
            };
        case mainOrder_types.ADD_MAIN_ORDER_FAILURE:
            return {
                ...state,
                isMainOrderFetching: false,
                errorMainOrderMessage: action.payload
            };
            //Site Order Delete
        case mainOrder_types.DEL_MAIN_ORDER_START:
            return {
                ...state,
                isMainOrderFetching: true
            };
        case mainOrder_types.DEL_MAIN_ORDER_FAILURE:
            return {
                ...state,
                isMainOrderFetching: false,
                errorMainOrderMessage: action.payload
            };
            //Site Order Edit
        case mainOrder_types.EDIT_MAIN_ORDER_START:
            return {
                ...state,
                isMainOrderFetching: true
            };
        case mainOrder_types.EDIT_MAIN_ORDER_FAILURE:
            return {
                ...state,
                isMainOrderFetching: false,
                errorMainOrderMessage: action.payload
            };
        default:
            return state;
    }
};

export default mainOrderReducer;