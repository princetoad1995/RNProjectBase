import React, { useMemo } from 'react';
import { Text } from 'react-native';
import { fontSizeMap, FONT_TYPES, useTheme } from '@/theme';
import { TextErrorProps } from './types';

export const TextError = ({
  error = '',
  size = 'm2',
  fontType = 'NOTOSANS_REGULAR',
  fontWeight = '400',
  color,
}: TextErrorProps) => {
  const { typography, colors } = useTheme();
  const styles = useMemo(
    () => [
      typography[FONT_TYPES[fontType]],
      {
        fontWeight,
        fontSize: fontSizeMap[size],
        color: color ? color : colors.error,
      },
    ],
    [fontType, typography, fontWeight, size, color, colors],
  );

  return <Text style={styles}>{error}</Text>;
};
