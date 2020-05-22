import {createTypes, completeTypes} from 'redux-recompose';

import {getBooks as getBooksFromApi} from 'src/services/booksService';

export const actions = createTypes(completeTypes(['SET_BOOKS']), '@@BOOKS');

const actionCreators = {
  getBooks: () => ({
    type: actions.SET_BOOKS,
    target: 'books',
    service: getBooksFromApi,
    successSelector: (response) => response.data.page,
    failureSelector: (response) => response.problem
  })
};

export default actionCreators;
