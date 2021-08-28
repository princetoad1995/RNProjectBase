import { COLORS } from './colors';
import { Platform } from './platform';

export enum FONT_TYPES {
  NOTOSANS_BOLD = 'notosansBold',
  NOTOSANS_REGULAR = 'notosansRegular',
  POPPINS_MEDIUM = 'poppinsMedium',
}

export type FontSize = 's26' | 's25' | 's20' | 's17' | 's13' | 's11';
export type FontWeight = '700' | '400';
export type FontColor = 'white' | 'black';

export const fontSizeMap: { [key in FontSize]: number } = {
  s26: Platform.SizeScale(26),
  s25: Platform.SizeScale(25),
  s20: Platform.SizeScale(20),
  s17: Platform.SizeScale(17),
  s13: Platform.SizeScale(13),
  s11: Platform.SizeScale(11),
};

export const fontColorMap: { [key in FontColor]: string } = {
  white: COLORS.WHITE,
  black: COLORS.BLACK,
};
