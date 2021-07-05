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
          padding: Platform.SizeScale(12),
          justifyContent: 'center',
          height: Platform.SizeScale(48),
          borderRadius: Platform.SizeScale(24),
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
        lightGray: {
          backgroundColor: colors.lightGray,
        },
        mandy: {
          backgroundColor: colors.mandy,
        },
        grey: {
          backgroundColor: colors.grey,
        },
      }),
    [colors],
  );
  return { colors, styles };
};
