import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import { fetchMiddleware } from 'redux-recompose';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import currentQuery from './Search/reducer';
import currentUser from './Auth/reducer';
import library from './Books/reducer';
import rentals from './Rentals/reducer';
import book from './Book/reducer';

const logger = createLogger();

const reducers = combineReducers({
  currentUser,
  currentQuery,
  library,
  rentals,
  book
});

const middlewares = [thunk, logger, fetchMiddleware];
const enhancers = [];
enhancers.push(applyMiddleware(...middlewares));

const store = createStore(reducers, compose(...enhancers));

export default store;
