import React, { useMemo } from 'react';
import ParsedText from 'react-native-parsed-text';
import { useTheme } from '@/theme';
import { FONT_TYPES } from './constants';
import { ParsedTextProps } from './types';

export const Text = ({
  children,
  style,
  fontType = 'INTER',
  ...other
}: ParsedTextProps) => {
  const { typography } = useTheme();
  const styles = useMemo(() => [typography[FONT_TYPES[fontType]], style], [
    style,
    fontType,
    typography,
  ]);

  return (
    <ParsedText style={styles} {...other}>
      {children}
    </ParsedText>
  );
};
