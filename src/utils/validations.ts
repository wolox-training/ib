import {EMAIL_REQUIRED, PASSWORD_INVALID, PASSWORD_REQUIRED, EMAIL_INVALID} from './constants';

export function validateEmail(value: string) {
  let error;
  if (!value) {
    error = EMAIL_REQUIRED;
  } else if (!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i.test(value)) {
    error = EMAIL_INVALID;
  }
  return error;
}

export function validatePassword(value: string) {
  let error;
  if (!value) {
    error = PASSWORD_REQUIRED;
  } else if (!/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{6,})/.test(value)) {
    error = PASSWORD_INVALID;
  }
  return error;
}
