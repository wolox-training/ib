import {createStore, combineReducers} from 'redux';
import currentQuery from './Search/reducer';
import library from './Books/reducer';

const reducers = combineReducers({
  currentQuery,
  library
});

const store = createStore(reducers);

export default store;
