import {actions} from './actions';

const defaultState = {
  books: [],
  loading: false,
  error: ''
};

const library = (state = defaultState, action: any) => {
  switch (action.type) {
    case actions.SET_BOOKS: {
      return {
        ...state,
        loading: false
      };
    }
    case actions.SET_BOOKS_SUCCESS: {
      return {
        ...state,
        books: action.books,
        loading: false
      };
    }
    case actions.SET_BOOKS_FAILURE: {
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

export default library;
