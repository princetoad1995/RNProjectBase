import { StyleSheet } from 'react-native';
import Color from 'color';
import { COLORS } from './colors';
import { Platform } from './platform';

export const DefaultTheme = {
  colors: {
    black: COLORS.BLACK,
    white: COLORS.WHITE,
    gray: COLORS.GRAY,
    light: COLORS.LIGHT,
    offWhite: COLORS.OFF_WHITE,
    primary: COLORS.PRIMARY,
    subPrimary: COLORS.SUB_PRIMARY,
    secondary: COLORS.SECONDARY,
    subSecondary: COLORS.SUB_SECONDARY,
    link: COLORS.LINK,
    success: COLORS.SUCCESS,
    warning: COLORS.WARNING,
    error: COLORS.ERROR,
    java: COLORS.JAVA,
    bgSplashLinearGradient: [
      Color(COLORS.JAVA).alpha(0.4).toString(),
      Color(COLORS.WHITE).alpha(0.9).toString(),
      COLORS.WHITE,
    ],
    bgNewSplashLinearGradient: [
      Color(COLORS.WHITE).alpha(0).toString(),
      Color(COLORS.WHITE).alpha(0.9).toString(),
      COLORS.WHITE,
    ],
  },
  typography: StyleSheet.create({
    notosansBold: {
      fontFamily: 'NotoSans-Bold',
      fontSize: Platform.SizeScale(),
      color: COLORS.GRAY,
    },
    notosansRegular: {
      fontFamily: 'NotoSansKannada-Regular',
      fontSize: Platform.SizeScale(),
      color: COLORS.GRAY,
    },
    poppinsMedium: {
      fontFamily: 'Poppins-Medium',
      fontSize: Platform.SizeScale(),
      color: COLORS.GRAY,
    },
  }),
};
