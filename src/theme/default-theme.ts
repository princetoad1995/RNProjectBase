import { StyleSheet } from 'react-native';
import Color from 'color';
import { COLORS } from './colors';
import { Platform } from './platform';

export const DefaultTheme = {
  colors: {
    black: COLORS.BLACK,
    white: COLORS.WHITE,
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
      color: COLORS.BLACK,
    },
    notosansRegular: {
      fontFamily: 'NotoSans-Regular',
      fontSize: Platform.SizeScale(),
      color: COLORS.BLACK,
    },
    poppinsMedium: {
      fontFamily: 'Poppins-Medium',
      fontSize: Platform.SizeScale(),
      color: COLORS.BLACK,
    },
  }),
};
