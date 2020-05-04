import {actions} from './actions';

const defaultState = {
  query: '',
};

const currentQuery = (state = defaultState, action) => {
  switch(action.type){
      case actions.SET_QUERY: {
          return {
            ...state,
            query: action.query
          };
        }
      default:
        return state;
  }
}

export default currentQuery;
