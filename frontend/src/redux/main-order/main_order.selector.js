import { createSelector } from 'reselect';

const selectMainOrder = state => state.mainOrderReducer


export const selectMainOrderList = createSelector(
    [selectMainOrder],
    orderList => orderList.mainOrderList
)