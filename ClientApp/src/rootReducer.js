import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import items from './reducers/items';
import { initialState } from './utils/db';

export default combineReducers({
  items,
  router: routerReducer
});
