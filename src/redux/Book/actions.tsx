import {createTypes, completeTypes} from 'redux-recompose';

import {getBookDetails} from 'src/services/booksService';

export const actions = createTypes(completeTypes(['GET_DETAILS']), '@@BOOK');

const actionCreators = {
  getDetails: (id: string) => ({
    type: actions.GET_DETAILS,
    target: 'details',
    service: getBookDetails,
    payload: id,
    successSelector: (response) => response.data,
    failureSelector: (response) => response.problem
  })
};

export default actionCreators;
