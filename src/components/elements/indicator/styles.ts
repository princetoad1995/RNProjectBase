import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { Platform, useTheme } from '@/theme';

export const useStyleIndicator = () => {
  const { colors } = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          right: Platform.SizeScale(),
          position: 'absolute',
        },
      }),
    [],
  );

  return {
    colors,
    styles,
  };
};
