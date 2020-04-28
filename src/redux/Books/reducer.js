import Books from '../../../assets/Books.json';
import {actions} from './actions';

const defaultState = {
  books: Books
};

const library = (state = defaultState, action) => {
  switch(action.type){
      case actions.SET_BOOKS: {
          return {
            ...state,
            books: action.books
          };
        }
      default:
        return state;
  }
}

export default library;
