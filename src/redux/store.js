import {createStore} from 'redux';

import Books from '../../assets/Books.json'; // TODO delete

const initialState = {
  selectedBooks: [],
  books: Books,
}

function rootReducer(state = initialState, action) {
  return state;
}

const store = createStore(rootReducer);

export default store;