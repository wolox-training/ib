import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {fetchMiddleware} from 'redux-recompose';
import {createLogger} from 'redux-logger';

const logger = createLogger();

function waitForInjections() {
  return new Promise((resolve) => setImmediate(resolve));
}

function createWaitForInjections() {
  return ({dispatch, getState}) => (next) => async (action) => {
    const result = await next(action);
    await waitForInjections();
    return result;
  };
}

const waitForInjectionsMiddleware = createWaitForInjections();

const middlewares = [waitForInjectionsMiddleware, thunk, fetchMiddleware, logger];

export const mockStore = configureStore(middlewares);
const initialState = {};
export const store = mockStore(initialState);
