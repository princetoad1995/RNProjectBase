import React, { useMemo } from 'react';
import ParsedText from 'react-native-parsed-text';
import { fontSizeMap, FONT_TYPES, useTheme } from '@/theme';
import { ParsedTextProps } from './types';

export const Text = ({
  children,
  style,
  size = 'm3',
  fontType = 'POPPINS_MEDIUM',
  ...other
}: ParsedTextProps) => {
  const { typography } = useTheme();
  const styles = useMemo(
    () => [typography[FONT_TYPES[fontType]], style],
    [style, fontType, typography],
  );

  return (
    <ParsedText style={[styles, { fontSize: fontSizeMap[size] }]} {...other}>
      {children}
    </ParsedText>
  );
};
