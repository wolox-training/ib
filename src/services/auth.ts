import {UserForm} from 'src/app/interfaces/user';
import api from '../config/api';

/*
export const login = (user: UserForm) => api.post('/auth/sign_in', user);
*/

// La card indica que use este usuario
export const login = (user: UserForm) =>
  api.post('/auth/sign_in', {email: 'Ignacio.coluccio@wolox.com.ar', password: 'wolox1189'});
