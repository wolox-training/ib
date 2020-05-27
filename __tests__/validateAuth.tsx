import {getBooks} from 'src/services/booksService';
import api from 'src/config/api';
import {validateEmail, validatePassword} from 'src/utils/validations';

describe('validate Password', () => {
  test('invalid password', () => {
    expect(validatePassword('asd')).toBe('Contraseña invalida');
  });
  test('valid password', () => {
    expect(validatePassword('wowowo1134')).toBe(undefined);
  });
  test('required password', () => {
    expect(validatePassword('')).toBe('Contraseña requerida');
  });
});

describe('validate email', () => {
  test('invalid password', () => {
    expect(validateEmail('asd')).toBe('Email invalido');
  });
  test('valid password', () => {
    expect(validateEmail('ignacio.coluccio@wolox.com.ar')).toBe(undefined);
  });
  test('required password', () => {
    expect(validateEmail('')).toBe('Email requerido');
  });
});

describe('books services', () => {
  api.get = jest.fn().mockReturnValue({});
  test('getBooks', () => {
    const response = getBooks();
    expect(response).toEqual({});
  });
});
