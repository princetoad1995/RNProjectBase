import React, { Dispatch, useReducer } from 'react';

type AuthStateType = {
  logged: boolean;
};

type AuthActionType = {
  type: 'UPDATE_LOGGED';
  logged: boolean;
};

const initialState: AuthStateType = {
  logged: false,
};

const AuthContext = React.createContext<{
  state: AuthStateType;
  dispatch: Dispatch<AuthActionType>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const authReducer = (
  state: AuthStateType,
  action: AuthActionType,
): AuthStateType => {
  switch (action.type) {
    case 'UPDATE_LOGGED':
      return { ...state, logged: action.logged };
    default:
      return state;
  }
};

const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
