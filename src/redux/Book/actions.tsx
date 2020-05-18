import {createTypes} from 'redux-recompose';

import {getBookDetails} from 'src/services/booksService';

export const actions = createTypes(['GET_DETAILS', 'GET_DETAILS_SUCCESS', 'GET_DETAILS_FAILURE'], '@@BOOK');

const actionCreators = {
  getDetails: (id: string) => ({
    type: actions.GET_DETAILS,
    target: 'details',
    service: getBookDetails,
    payload: id,
    successSelector: response => response.data,
    failureSelector: response => response.problem
  })
};

export default actionCreators;
