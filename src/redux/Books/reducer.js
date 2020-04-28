import Books from '../../../assets/Books.json';

const defaultState = {
  books: Books
};

const library = (state = defaultState, action) => {
  switch(action.type){
      case "SET_BOOKS": {
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
