export interface User {
  id: number;
  username: string;
  encrypted_password: string;
  email: string;
  created_at: Date;
}

export interface UserInput {
  username: string;
  email: string;
  password: string;
}