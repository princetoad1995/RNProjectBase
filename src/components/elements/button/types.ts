import { TextStyle, ViewStyle } from 'react-native';
import { DefaultTheme, FontSize, FontWeight, FONT_TYPES } from '@/theme';
import { BUTTON_STYLES } from './constants';

export type ButtonProps = {
  label: string;
  style?: ViewStyle;
  labelStyle?: TextStyle;
  buttonStyle?: keyof typeof BUTTON_STYLES;
  fontType?: keyof typeof FONT_TYPES;
  icon?: any;
  isLoading?: boolean;
  onPress?: () => any;
  isShadow?: boolean;
  disabled?: boolean;
  labelColor?: keyof typeof DefaultTheme.colors;
  indicatorColor?: keyof typeof DefaultTheme.colors;
  textSize?: FontSize;
  fontWeight?: FontWeight;
};
