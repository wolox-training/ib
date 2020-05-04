import {createTypes} from 'redux-recompose';

import {getBookDetails} from 'src/services/booksService';

export const actions = createTypes(['GET_DETAILS', 'GET_DETAILS_SUCCESS', 'GET_DETAILS_FAILURE'], '@@BOOK');

const actionCreators = {
  getDetails: (id: string) => async (dispatch: any) => {
    dispatch({type: actions.GET_DETAILS});
    const response = await getBookDetails(id);
    if (response.ok) {
      dispatch({
        type: actions.GET_DETAILS_SUCCESS,
        details: response.data
      });
    } else {
      dispatch({
        type: actions.GET_DETAILS_FAILURE,
        error: response.problem
      });
    }
  }
};

export default actionCreators;
