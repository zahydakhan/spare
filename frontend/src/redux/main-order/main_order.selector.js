import { createSelector } from 'reselect';

const selectMainOrder = state => state.mainOrderReducer


export const selectMainOrderList = createSelector(
    [selectMainOrder],
    orderList => orderList.mainOrderList
)

export const selectMonthlyOrderList = createSelector(
    [selectMainOrder],
    orderList => orderList.monthlyOrderList
)

export const selectSites = createSelector(
    [selectMainOrderList],
    mainOrderList => mainOrderList.data.map((order) => (order.site_name)).filter((item, i, ar) => ar.indexOf(item) === i)
)

export const selectVendor = createSelector(
    [selectMainOrderList],
    mainOrderList => mainOrderList.data.map((order) => (order.vendor_name)).filter((item, i, ar) => ar.indexOf(item) === i)
)

export const selectMonth = createSelector(
    [selectMainOrderList],
    mainOrderList => mainOrderList.data.map((order) => (order.month)).filter((item, i, ar) => ar.indexOf(item) === i)
)

export const dropdownList = createSelector(
    [selectMainOrderList],
    mainOrderList => mainOrderList.data.map((order) => ({site_name: order.site_name, vendor_name: order.vendor_name, month: order.month}))
)