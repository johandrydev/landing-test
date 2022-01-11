import { Dispatch } from "react";

export enum userTypeActions {
  UPDATE = 'UPDATE',
  LOGOUT = 'LOGOUT'
}

export interface IDataUser {
  email: string | null;
  token: string;
};

export interface IUserReducer {
  isAutenticated: boolean;
  data?: IDataUser | null;
};

export interface IUserActions {
  type: string,
  payload?: IDataUser
};

export interface IUserContext {
  userState: IUserReducer,
  userDispatch: Dispatch<IUserActions>,
};
