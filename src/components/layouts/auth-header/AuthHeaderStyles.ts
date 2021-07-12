import { StyleSheet } from 'react-native';
import { Platform, useTheme } from '@/theme';
import { useMemo } from 'react';

export const useStyleAuthHeader = () => {
  const { colors } = useTheme();
  return useMemo(
    () =>
      StyleSheet.create({
        containerHeader: {
          flexDirection: 'row',
          alignItems: 'center',
          padding: Platform.SizeScale(20),
        },
        titleHeader: {
          fontSize: Platform.SizeScale(20),
          color: colors.primary,
          marginLeft: Platform.SizeScale(10),
        },
        imgLogo: {
          width: Platform.SizeScale(32),
          height: Platform.SizeScale(32),
        },
      }),
    [colors],
  );
};
