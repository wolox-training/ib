import {actions} from './actions';

const defaultState = {
  details: {},
  loading: false,
  error: ''
};

const book = (state = defaultState, action: any) => {
  switch (action.type) {
    case actions.GET_DETAILS: {
      return {
        ...state,
        loading: true
      };
    }
    case actions.GET_DETAILS_SUCCESS: {
      return {
        ...state,
        details: action.details,
        loading: false
        
      };
    }
    case actions.GET_DETAILS_FAILURE: {
      return {
        ...state,
        error: action.error,
        loading: false
      };
    }
    default:
      return state;
  }
};

export default book;
