import { combineReducers } from 'redux';
import  cartReducer from './cart/cart.reducer';
import shopReducer from './shop/shop.reducer'
import direcoryReducer from './directory/directory.reducer'
import itemsReducer from '../redux/items/items.reducer'
export default combineReducers({
  directory:direcoryReducer, 
  shop:shopReducer,
  cart:cartReducer,
  items:itemsReducer
});
