import {createTypes, completeTypes} from 'redux-recompose';

export const actions = createTypes(completeTypes([], ['SET_QUERY']), '@@SEARCH');

export const setQuery = (query: string) => ({
  type: actions.SET_QUERY,
  target: 'query',
  payload: query
});
