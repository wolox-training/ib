const defaultState = {
  selectedBooks: [],
  query: '',
};

const currentQuery = (state = defaultState, action) => {
  switch(action.type){
      case "SET_QUERY": {
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
