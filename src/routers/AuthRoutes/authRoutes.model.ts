import { StackNavigationProp } from '@react-navigation/stack';

export type AuthStackParamList = {
  Intro: undefined;
  Login: undefined;
  SignUp: undefined;
};

export type IntroScreenNavigationProps = StackNavigationProp<
  AuthStackParamList,
  'Intro'
>;

export type LoginScreenNavigationProps = StackNavigationProp<
  AuthStackParamList,
  'Login'
>;

export type SignUpScreenNavigationProps = StackNavigationProp<
  AuthStackParamList,
  'SignUp'
>;
