import { HomeScreen } from '@/screens';
import { IScreen } from '../BaseRoutes';

const HomeRoutes: IScreen[] = [
  {
    name: 'Home',
    component: HomeScreen,
    options: {
      headerShown: false,
    },
  },
];

export default HomeRoutes;
