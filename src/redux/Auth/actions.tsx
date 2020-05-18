import {createTypes} from 'redux-recompose';
import {UserForm} from 'src/app/interfaces/user';
import {login} from 'src/services/auth';
import AsyncStorage from '@react-native-community/async-storage';

export const actions = createTypes(
  ['LOGIN_USER', 'LOGIN_USER_SUCCESS', 'LOGIN_USER_FAILURE', 'LOGOUT_USER'],
  '@@USER'
);

const actionCreators = {
  loginUser: (user: UserForm) => ({
    type: actions.LOGIN_USER,
    target: 'user',
    service: login,
    payload: user,
    successSelector: response => response.data.data,
    failureSelector: response => response.problem
  }),
  logoutUser: () => (dispatch: any) => {
    AsyncStorage.removeItem('access-token');
    dispatch({
      type: actions.LOGOUT_USER
    });
  }
};

export default actionCreators;
