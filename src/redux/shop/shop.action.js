import shopActionTypes from './shop.types'

export const searchProduct = (SearchValue)=>({
    type:shopActionTypes.SEARCH_PRODUCT,
    payload: SearchValue
})