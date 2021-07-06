import { IntroScreen, LoginScreen, SignUpScreen } from '@/screens';
import { IScreen } from '../BaseRoutes';

const AuthRoutes: IScreen[] = [
  {
    name: 'Intro',
    component: IntroScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Login',
    component: LoginScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'SignUp',
    component: SignUpScreen,
    options: {
      headerShown: false,
    },
  },
];

export default AuthRoutes;
