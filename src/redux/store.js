import {createStore, combineReducers} from 'redux';
import currentQuery from './Search/reducer';
import library from './Books/reducer';
import rentals from './Rentals/reducer';

const reducers = combineReducers({
  currentQuery,
  library,
  rentals
});

const store = createStore(reducers);

export default store;
