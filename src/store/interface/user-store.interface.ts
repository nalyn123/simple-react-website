export interface UserStoreProps {
  auth: AuthProps | null;
}

export interface AuthProps {
  email?: string;
  firstname?: string;
  lastname?: string;
  [key: string]: any;
}

export interface LoginProps {
  email: string;
  password: string;
}
