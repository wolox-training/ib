import {createTypes, completeTypes} from 'redux-recompose';

export const actions = createTypes(completeTypes([], ['ADD_RENTAL', 'REMOVE_RENTAL']), '@@RENTALS');

export const addRental = (book) => ({
  type: actions.ADD_RENTAL,
  target: 'books',
  payload: book
});

export const removeRental = (book) => ({
  type: actions.REMOVE_RENTAL,
  target: 'books',
  payload: book
});
