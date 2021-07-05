import { ActivityIndicatorProps } from 'react-native';
import { DefaultTheme } from '@/theme';

export type IndicatorProps = ActivityIndicatorProps & {
  indicatorColor?: keyof typeof DefaultTheme.colors;
};
