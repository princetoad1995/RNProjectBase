import React, { useMemo } from 'react';
import ParsedText from 'react-native-parsed-text';
import { fontSizeMap, FONT_TYPES, useTheme } from '@/theme';
import { ParsedTextProps } from './types';

export const Text = ({
  children,
  style,
  size = 'm3',
  fontType = 'NOTOSANS_BOLD',
  fontWeight = '400',
  ...other
}: ParsedTextProps) => {
  const { typography } = useTheme();
  const styles = useMemo(
    () => [
      typography[FONT_TYPES[fontType]],
      style,
      { fontWeight, fontSize: fontSizeMap[size] },
    ],
    [style, fontType, typography, fontWeight, size],
  );

  return (
    <ParsedText style={styles} {...other}>
      {children}
    </ParsedText>
  );
};
