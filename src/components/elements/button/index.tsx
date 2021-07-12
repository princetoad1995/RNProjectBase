import { fontSizeMap, FONT_TYPES, useTheme } from '@/theme';
import React, { useMemo } from 'react';
import { Image, TextStyle, Text } from 'react-native';
import { Indicator } from '../indicator';
import { Touchable } from '../touchable';
import { BUTTON_STYLES } from './constants';
import { useStyleButton } from './styles';
import { ButtonProps } from './types';

export const Button = ({
  label,
  style,
  buttonStyle,
  fontType = 'NOTOSANS_BOLD',
  icon,
  isLoading,
  onPress,
  labelColor,
  indicatorColor = 'white',
  disabled,
  labelStyle = {},
  textSize = 'm1',
  fontWeight = '700',
}: ButtonProps) => {
  const { styles, colors } = useStyleButton();
  const { typography } = useTheme();

  const getContainerStyle = useMemo(() => {
    let containerStyle = {};
    switch (buttonStyle) {
      case BUTTON_STYLES.PRIMARY:
        containerStyle = styles.primary;
        break;
      case BUTTON_STYLES.WHITE:
        containerStyle = styles.white;
        break;
      case BUTTON_STYLES.GRAY:
        containerStyle = styles.gray;
        break;
      default:
        containerStyle = styles.primary;
    }

    return [styles.container, containerStyle, style];
  }, [buttonStyle, styles, style]);

  const getTextStyle = useMemo<TextStyle[]>(() => {
    let color;
    switch (buttonStyle) {
      case BUTTON_STYLES.WHITE:
        color = colors.primary;
        break;
      default:
        color = colors.white;
        break;
    }

    if (labelColor) {
      color = labelColor;
    }

    return [
      typography[FONT_TYPES[fontType]],
      { color },
      !icon
        ? {
            flex: 1,
            textAlign: 'center',
            fontSize: fontSizeMap[textSize],
            fontWeight,
          }
        : {},
      labelStyle,
    ];
  }, [
    buttonStyle,
    labelColor,
    icon,
    labelStyle,
    colors,
    textSize,
    fontWeight,
    typography,
    fontType,
  ]);

  return (
    <Touchable
      disabled={isLoading || disabled}
      style={getContainerStyle}
      onPress={onPress}>
      {icon && <Image style={styles.icon} source={icon} />}
      <Text style={getTextStyle}>{label}</Text>
      {isLoading && <Indicator indicatorColor={indicatorColor} />}
    </Touchable>
  );
};
