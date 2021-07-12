import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { Platform, useTheme } from '@/theme';

export const useStyleButton = () => {
  const { colors } = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          alignItems: 'center',
          padding: Platform.SizeScale(9),
          justifyContent: 'center',
          borderRadius: Platform.SizeScale(5),
          flexDirection: 'row',
        },
        icon: {
          width: Platform.SizeScale(14),
          height: Platform.SizeScale(14),
          marginRight: Platform.SizeScale(5),
        },
        text: {
          textAlign: 'center',
        },
        primary: {
          backgroundColor: colors.primary,
        },
        white: {
          backgroundColor: colors.white,
        },
        gray: {
          backgroundColor: colors.gray,
        },
      }),
    [colors],
  );
  return { colors, styles };
};
