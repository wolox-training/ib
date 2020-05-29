import api from 'src/config/api';
import {actionCreators, actions} from '../src/redux/Auth/actions';

import {internalServerError, successApiCall} from './utils/responses';
import {store} from './utils/mockStore';

describe('testing actions with an api mock', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('test dispatch error', async () => {
    api.post = jest.fn().mockReturnValue(internalServerError);
    const expectedActionsTypes = [actions.LOGIN_USER, actions.LOGIN_USER_FAILURE];
    await store.dispatch(actionCreators.loginUser({email: 'fakeUser@gmail.com', password: 'fakePswd123'}));
    const actionTypes = store.getActions().map((action) => action.type);
    expect(actionTypes).toEqual(expectedActionsTypes);
    expect(api.post.mock.calls).toHaveLength(1);
  });

  test('test dispatch success', async () => {
    api.post = jest.fn().mockReturnValue(successApiCall);
    const expectedActionsTypes = [actions.LOGIN_USER, actions.LOGIN_USER_SUCCESS];
    await store.dispatch(
      actionCreators.loginUser({email: 'correctUser@gmail.com', password: 'correctPswd123'})
    );
    const actionTypes = store.getActions().map((action) => action.type);
    expect(actionTypes).toEqual(expectedActionsTypes);
    expect(api.post.mock.calls).toHaveLength(1);
  });
});
