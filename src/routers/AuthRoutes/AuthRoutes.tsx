import { LoginScreen, SignUpScreen } from '@/screens';
import { IScreen } from '../BaseRoutes';

const AuthRoutes: IScreen[] = [
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
