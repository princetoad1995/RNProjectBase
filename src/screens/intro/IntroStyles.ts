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
          width: Platform.SizeScale(249),
          height: Platform.SizeScale(288),
        },
        wrapper: {
          alignItems: 'center',
        },
        sliderTitle: {
          color: colors.black,
          marginTop: Platform.SizeScale(20),
          marginHorizontal: Platform.SizeScale(30),
        },
      }),
    [colors],
  );
};
