import { StackNavigationProp } from '@react-navigation/stack';

export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
};

export type LoginScreenNavigationProps = StackNavigationProp<
  AuthStackParamList,
  'Login'
>;
export type SignUpScreenNavigationProps = StackNavigationProp<
  AuthStackParamList,
  'SignUp'
>;
