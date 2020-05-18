import {createTypes, createThunkAction} from 'redux-recompose';

import {getBooks as getBooksFromApi} from 'src/services/booksService';

export const actions = createTypes(['SET_BOOKS', 'SET_BOOKS_SUCCESS', 'SET_BOOKS_FAILURE'], '@@BOOKS');

const actionCreators = {
  getBooks: () => ({
    type: actions.SET_BOOKS,
    target: 'books',
    service: getBooksFromApi,
    successSelector: response => response.data.page,
    failureSelector: response => response.problem
  }),
};

export default actionCreators;
