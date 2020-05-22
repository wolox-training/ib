import {createReducer, completeReducer, completeState} from 'redux-recompose';

import {actions} from './actions';

const stateDescription = {
  books: []
};

const initialState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.SET_BOOKS]
}

export default createReducer(initialState, completeReducer(reducerDescription));
