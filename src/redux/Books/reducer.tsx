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
        loading: true
      };
    }
    case actions.SET_BOOKS_SUCCESS: {
      return {
        ...state,
        books: action.books
      };
    }
    case actions.SET_BOOKS_FAILURE: {
      return {
        ...state,
        error: action.error
      };
    }
    default:
      return state;
  }
};

export default library;
