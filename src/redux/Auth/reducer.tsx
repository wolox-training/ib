import {actions} from './actions';

const defaultState = {
  user: {},
  loading: false,
  error: ''
};

const currentUser = (state = defaultState, action: any) => {
  switch (action.type) {
    case actions.LOGIN_USER: {
      return {
        ...state,
        loading: false
      };
    }
    case actions.LOGIN_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
        loading: false
      };
    }
    case actions.LOGIN_USER_FAILURE: {
      return {
        ...state,
        error: action.error,
        loading: false
      };
    }
    case actions.LOGOUT_USER: {
      return defaultState;
    }
    default:
      return state;
  }
};

export default currentUser;
