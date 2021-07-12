import { FontSize, FontWeight, FONT_TYPES } from '@/theme';
import { ReactNode } from 'react';
import { ParsedTextProps as ParsedTextPropsBase } from 'react-native-parsed-text';

export type ParsedTextProps = ParsedTextPropsBase & {
  children: ReactNode;
  fontType?: keyof typeof FONT_TYPES;
  size?: FontSize;
  fontWeight?: FontWeight;
};
