import { Platform } from './platform';

export enum FONT_TYPES {
  NOTOSANS_BOLD = 'notosansBold',
  NOTOSANS_REGULAR = 'notosansRegular',
  POPPINS_MEDIUM = 'poppinsMedium',
}

export type FontSize = 'm4' | 'm3' | 'm2' | 'm1';

export const fontSizeMap: { [key in FontSize]: number } = {
  m4: Platform.SizeScale(25),
  m3: Platform.SizeScale(17),
  m2: Platform.SizeScale(13),
  m1: Platform.SizeScale(11),
};
