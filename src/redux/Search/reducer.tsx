import {createReducer, completeReducer} from 'redux-recompose';

import {actions} from './actions';

const initialState = {
  query: ''
};

const reducerDescription = {
  [actions.SET_QUERY]: (state, action) => ({
    ...state,
    [action.target]: action.payload
  })
}

export default createReducer(initialState, reducerDescription);
