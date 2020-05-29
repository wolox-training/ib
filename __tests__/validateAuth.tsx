import {validateEmail, validatePassword} from 'src/utils/validations';
import {EMAIL_REQUIRED, PASSWORD_INVALID, PASSWORD_REQUIRED, EMAIL_INVALID} from 'src/utils/constants';

describe('validate Password', () => {
  test('invalid password', () => {
    expect(validatePassword('asd')).toBe(PASSWORD_INVALID);
  });
  test('valid password', () => {
    expect(validatePassword('wowowo1134')).toBe(undefined);
  });
  test('required password', () => {
    expect(validatePassword('')).toBe(PASSWORD_REQUIRED);
  });
});

describe('validate email', () => {
  test('invalid email', () => {
    expect(validateEmail('asd')).toBe(EMAIL_INVALID);
  });
  test('valid email', () => {
    expect(validateEmail('ignacio.coluccio@wolox.com.ar')).toBe(undefined);
  });
  test('required email', () => {
    expect(validateEmail('')).toBe(EMAIL_REQUIRED);
  });
});
