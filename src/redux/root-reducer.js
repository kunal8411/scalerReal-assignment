import { combineReducers } from 'redux';

// import userReducer from './user/user.reducer';
import direcoryReducer from './directory/directory.reducer'
export default combineReducers({
  directory:direcoryReducer
});
