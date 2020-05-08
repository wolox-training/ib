export function validateEmail(value: string) {
  let error;
  if (!value) {
    error = 'Email requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Email invalido';
  }
  return error;
}

export function validatePassword(value: string) {
  let error;
  if (!value) {
    error = 'Contraseña requerida';
  } else if (!/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{6,})/.test(value)) {
    error = 'Contraseña invalida';
  }
  return error;
}
