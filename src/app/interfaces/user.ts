export interface UserForm {
  email: string;
  password: string;
}

export interface UserResponse {
  id: number;
  email: string;
  provider: string;
  uid: string;
  allow_password_change: boolean;
  first_name: string;
  last_name: string;
  locale: string;
}
