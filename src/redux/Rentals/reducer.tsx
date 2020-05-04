import {actions} from './actions';
import {BookData} from '../../app/interfaces/book';

const defaultState = {
  books:[],
} as {
  books: BookData[];
};

const rentals = (state = defaultState, action: any) => {
  switch(action.type){
      case actions.ADD_RENTAL: {
          return {
            ...state,
            books: [...state.books, action.book]
          };
        }
      case actions.REMOVE_RENTAL: {
        const {books} = state;
        const updatedRentals = books.filter((book) => book.id !== action.book.id);

        return {
          ...state,
          books: [...updatedRentals]
        };
      }
      default:
        return state;
  }
}

export default rentals;
