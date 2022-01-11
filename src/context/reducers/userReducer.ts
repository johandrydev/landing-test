import { isUserAuthenticated } from '../../helper/authutils';
import { IUserActions, IUserReducer, userTypeActions } from '../interfaces/userInterfaces';

// Initial state
export const userInitialState = (): IUserReducer => {
  return isUserAuthenticated(true);
};

const userReducer = (state = userInitialState(), actions: IUserActions): IUserReducer => {
  switch (actions.type) {
    case userTypeActions.UPDATE:
      return {
        ...state,
        data: actions.payload,
        isAutenticated: true,
      };

    case userTypeActions.LOGOUT:
      return {
        data: null,
        isAutenticated: false,
      };

    default:
      return state;
  }
};
export default userReducer;
