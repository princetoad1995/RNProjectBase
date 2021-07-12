import { StyleSheet } from 'react-native';
import { Platform, useTheme } from '@/theme';
import { useMemo } from 'react';

export const useStyleIntro = () => {
  const { colors } = useTheme();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          backgroundColor: colors.white,
          flex: 1,
        },
        imgSlider: {
          width: Platform.deviceWidth * 0.75,
          height: Platform.deviceHeight * 0.35,
        },
        wrapper: {
          alignItems: 'center',
        },
        sliderTitle: {
          color: colors.black,
          marginTop: Platform.SizeScale(10),
          marginHorizontal: Platform.SizeScale(30),
        },
        btnSignUpEmail: {
          marginHorizontal: Platform.SizeScale(50),
        },
        containerSocialBtn: {
          flexDirection: 'row',
          width: Platform.SizeScale(180),
          alignSelf: 'center',
          justifyContent: 'space-between',
        },
        imgSocial: {
          width: Platform.SizeScale(44),
          height: Platform.SizeScale(44),
        },
        alreadyAccountTitle: {
          textAlign: 'center',
        },
        signInTitle: {
          color: colors.primary,
        },
        containerButton: {
          height: Platform.deviceHeight * 0.3,
          justifyContent: 'space-around',
        },
      }),
    [colors],
  );
};
