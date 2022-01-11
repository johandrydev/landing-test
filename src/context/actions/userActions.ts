import { IDataUser, IUserActions, userTypeActions } from '../interfaces/userInterfaces';

export function userUpdate(payload: IDataUser): IUserActions {
  return {
    type: userTypeActions.UPDATE,
    payload
  };
}

export function userLogout(): IUserActions {
  return {
    type: userTypeActions.LOGOUT
  };
}
