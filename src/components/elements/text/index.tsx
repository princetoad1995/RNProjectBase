import React, { useMemo } from 'react';
import ParsedText from 'react-native-parsed-text';
import { fontColorMap, fontSizeMap, FONT_TYPES, useTheme } from '@/theme';
import { ParsedTextProps } from './types';

export const Text = ({
  children,
  style,
  fontSize = 's13',
  fontType = 'NOTOSANS_BOLD',
  fontWeight = '400',
  fontColor = 'black',
  ...other
}: ParsedTextProps) => {
  const { typography } = useTheme();
  const styles = useMemo(
    () => [
      typography[FONT_TYPES[fontType]],
      style,
      {
        fontWeight,
        color: fontColorMap[fontColor],
        fontSize: fontSizeMap[fontSize],
      },
    ],
    [style, fontType, typography, fontWeight, fontColor, fontSize],
  );

  return (
    <ParsedText style={styles} {...other}>
      {children}
    </ParsedText>
  );
};
