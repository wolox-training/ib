import {createTypes} from 'redux-recompose';

import {getBooks as getBooksFromApi} from 'src/services/booksService';

export const actions = createTypes(['SET_BOOKS', 'SET_BOOKS_SUCCESS', 'SET_BOOKS_FAILURE'], '@@BOOKS');

const actionCreators = {
  getBooks: () => async (dispatch: any) => {
    dispatch({type: actions.SET_BOOKS});
    const response = await getBooksFromApi();
    if (response.ok) {
        dispatch({
        type: actions.SET_BOOKS_SUCCESS,
        books: response.data.page
      });
    } else {
      dispatch({
        type: actions.SET_BOOKS_FAILURE,
        error: response.problem
      });
    }
  }
};

export default actionCreators;
