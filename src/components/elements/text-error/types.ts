import { FontSize, FontWeight, FONT_TYPES } from '@/theme';

export type TextErrorProps = {
  error?: string;
  fontType?: keyof typeof FONT_TYPES;
  size?: FontSize;
  fontWeight?: FontWeight;
  color?: string;
};
