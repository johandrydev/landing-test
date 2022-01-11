import { createContext, useReducer, useEffect, FC, useContext } from 'react';
import { IUserContext } from './interfaces/userInterfaces';
import userReducer, { userInitialState } from './reducers/userReducer';

export const userContext = createContext<IUserContext | undefined>(undefined);
export const UserProvider: FC = ({ children }) => {
  const [ state, dispatch ] = useReducer(userReducer, userInitialState());

  useEffect(() => {
    const dataSave = {
      data: state.data,
      isAutenticated: state.isAutenticated,
    }
    localStorage.setItem('user', JSON.stringify(dataSave));
  }, [state]);

  return (
    <userContext.Provider
      value={{
        userState: state,
        userDispatch: dispatch,
      }}
    >
      { children }
    </userContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(userContext)
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider')
  }
  return context
};
