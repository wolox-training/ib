import {createReducer, completeReducer, completeState} from 'redux-recompose';
import {actions} from './actions';

const stateDescription = {
  details: {},
};
const initialState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.GET_DETAILS]
}

export default createReducer(initialState, completeReducer(reducerDescription));
