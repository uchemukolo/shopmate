import { combineReducers } from 'redux';
import auth from '../reducers/auth';
import getAllProductsReducer from '../reducers/getAllProductsReducer';
export default combineReducers({
  auth,
  getAllProductsReducer,
});