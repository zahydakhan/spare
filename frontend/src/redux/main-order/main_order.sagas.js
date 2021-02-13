import { takeLatest, put, call } from 'redux-saga/effects';

import * as mainOrder_types from './main_order.types';
import axios from '../../utils/axios1';

import {
    fetchMainOrderStart,
    fetchMainOrderSuccess,
    fetchMainOrderFailure,
    addMainOrderStart,
    addMainOrderFailure,
    delMainOrderStart,
    delMainOrderFailure,
    editMainOrderStart,
    editMainOrderFailure,

} from './main_order.actions';

//Fetch Site Order Saga
export function* fetchMainOrder(action) {
    console.log('running Site Order Fetch Start saga');
    
    try {
        const mainOrdersList = yield axios.get(
            `/pr/main_pr/`);
        console.log(mainOrdersList);
        yield put(fetchMainOrderSuccess(mainOrdersList.data));
    } catch (error) {
        yield put(fetchMainOrderFailure(error.message));
    }
}

export function* onFetchMainOrderStart() {
        yield takeLatest(mainOrder_types.FETCH_MAIN_ORDER_START, fetchMainOrder);
    }
    //Add ROLLERS Saga
export function* addMainOrder(action) {
    try {
        console.log('running main order add start saga');
        console.log(action.payload);
        const mainOrderList = yield axios.post(`/pr/main_pr/`, action.payload);
        console.log(mainOrderList);

        //yield put(addRollerSuccess(sitesList.data));
        yield put(fetchMainOrderStart({ pageNo: 0, rowsPerPage: 10, searchstr: '' }));
    } catch (error) {
        yield put(addMainOrderFailure(error.message));
    }
}

export function* onAddMainOrderStart() {
    yield takeLatest(mainOrder_types.ADD_MAIN_ORDER_START, addMainOrder);
}

//Delete ROLLERS Saga
export function* delMainOrder(action) {
    try {
        console.log('running site order delete axios');
        console.log(action.payload);
        const mainOrderList = yield axios.delete(`/pr/main_pr/` + action.payload);
        console.log(mainOrderList);

        yield put(fetchMainOrderStart({ pageNo: 0, rowsPerPage: 10, searchstr: '' }));
    } catch (error) {
        yield put(delMainOrderFailure(error.message));
    }
}

export function* onDelMainOrderStart() {
    yield takeLatest(mainOrder_types.DEL_MAIN_ORDER_START, delMainOrder);
}

//Edit ROLLERS Saga
export function* editMainOrder(action) {
    try {
        console.log('Running Site Order Edit saga');
        let rowId = action.payload.rollerId;
        let values = action.payload.values;
        const mainOrderList = yield axios.put(`/pr/main_pr/${rowId}/`, values);
        console.log(mainOrderList);

        yield put(fetchMainOrderStart({ pageNo: 0, rowsPerPage: 10, searchstr: '' }));
    } catch (error) {
        yield put(editMainOrderFailure(error.message));
    }
}

export function* onEditMainOrderStart() {
    yield takeLatest(mainOrder_types.EDIT_MAIN_ORDER_START, editMainOrder);
}