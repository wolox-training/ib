import {UserForm} from 'src/app/interfaces/user';
import api from '../config/api';

export const login = (user: UserForm) => api.post('/auth/sign_in', user);
