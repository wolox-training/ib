import {createReducer} from 'redux-recompose';
import {actions} from './actions';
import {BookData} from '../../app/interfaces/book';

const initialState = {
  books: []
} as {
  books: BookData[];
};

const addRental = (state, action) => ({...state, [action.target]: [...state.books, action.payload]});

const removeRental = (state, action) => {
  const {books} = state;
  const updatedRentals = books.filter((book) => book.id !== action.payload.id);

  return {
    ...state,
    [action.target]: [...updatedRentals]
  };
};

const reducerDescription = {
  [actions.ADD_RENTAL]: (state, action) => addRental(state, action),
  [actions.REMOVE_RENTAL]: (state, action) => removeRental(state, action)
};

export default createReducer(initialState, reducerDescription);
