import SHOP_DATA from './shop.data'
import shopActionTypes from './shop.types'
import {searchProduct} from './shop.utils'
const INITIAL_STATE={
    collections:SHOP_DATA
}   


const shopReducer = (state=INITIAL_STATE, action )=>{
    switch(action.type){
        case shopActionTypes.SEARCH_PRODUCT:
            return{
                ...state, 
                collections:searchProduct(state.collections, action.payload)
            }
        default:
            return state;

    }
}

export default shopReducer;