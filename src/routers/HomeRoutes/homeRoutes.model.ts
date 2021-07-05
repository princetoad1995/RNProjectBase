import { StackNavigationProp } from '@react-navigation/stack';

export type HomeStackParamList = {
  Home: undefined;
};

export type HomeScreenNavigationProps = StackNavigationProp<
  HomeStackParamList,
  'Home'
>;
