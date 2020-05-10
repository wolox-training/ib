import {createTypes} from 'redux-recompose';
import {UserForm} from 'src/app/interfaces/user';
import {login} from 'src/services/auth';
import AsyncStorage from '@react-native-community/async-storage';

export const actions = createTypes(
  ['LOGIN_USER', 'LOGIN_USER_SUCCESS', 'LOGIN_USER_FAILURE', 'LOGOUT_USER'],
  '@@USER'
);

const actionCreators = {
  loginUser: (user: UserForm) => async (dispatch: any) => {
    dispatch({type: actions.LOGIN_USER});
    const response = await login(user);
    if (response.ok) {
      AsyncStorage.setItem('access-token', response.headers['access-token']);
      dispatch({
        type: actions.LOGIN_USER_SUCCESS,
        user: response.data.data
      });
    } else {
      dispatch({
        type: actions.LOGIN_USER_FAILURE,
        error: response.problem
      });
    }
  },
  logoutUser: () => (dispatch: any) => {
    AsyncStorage.removeItem('access-token');
    dispatch({
      type: actions.LOGOUT_USER
    });
  }
};

export default actionCreators;


{

}