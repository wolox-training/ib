import {actions} from './actions';

const defaultState = {
  books: [],
};

const rentals = (state = defaultState, action) => {
  switch(action.type){
      case actions.ADD_RENTAL: {
          return {
            ...state,
            books: [...state.books, action.book]
          };
        }
      case actions.REMOVE_RENTAL: {
        const {books} = state;
        const removeIndex = books.map(item => item.id).indexOf(action.book.id);
        books.splice(removeIndex, 1);

        return {
          ...state,
          books: [...books]
        };
      }
      default:
        return state;
  }
}

export default rentals;
