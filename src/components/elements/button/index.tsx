import React, { useMemo } from 'react';
import { Image, TextStyle } from 'react-native';
import { Platform } from '@/theme';
import { Indicator } from '../indicator';
import { Text } from '../text';
import { Touchable } from '../touchable';
import { BUTTON_STYLES } from './constants';
import { useStyleButton } from './styles';
import { ButtonProps } from './types';

export const Button = ({
  label,
  style,
  buttonStyle,
  fontType = 'INTER',
  icon,
  isLoading,
  onPress,
  labelColor,
  indicatorColor = 'white',
  disabled,
  labelStyle = {},
}: ButtonProps) => {
  const { styles, colors } = useStyleButton();

  const getContainerStyle = useMemo(() => {
    let containerStyle = {};
    switch (buttonStyle) {
      case BUTTON_STYLES.LIGHT_GRAY:
        containerStyle = styles.lightGray;
        break;
      case BUTTON_STYLES.MANDY:
        containerStyle = styles.mandy;
        break;
      case BUTTON_STYLES.GREY:
        containerStyle = styles.grey;
        break;
      default:
        containerStyle = styles.mandy;
    }

    return [styles.container, containerStyle, style];
  }, [buttonStyle, styles, style]);

  const getTextStyle = useMemo<TextStyle[]>(() => {
    let color;
    switch (buttonStyle) {
      case BUTTON_STYLES.LIGHT_GRAY:
      case BUTTON_STYLES.GREY:
        color = colors.black;
        break;
      default:
        color = colors.white;
        break;
    }

    if (labelColor) {
      color = labelColor;
    }

    return [
      { color },
      !icon
        ? { flex: 1, textAlign: 'center', fontSize: Platform.SizeScale(20) }
        : {},
      labelStyle,
    ];
  }, [buttonStyle, labelColor, icon, labelStyle, colors.black, colors.white]);

  return (
    <Touchable
      disabled={isLoading || disabled}
      style={getContainerStyle}
      onPress={onPress}>
      {icon && <Image style={styles.icon} source={icon} />}
      <Text fontType={fontType} style={getTextStyle}>
        {label}
      </Text>
      {isLoading && <Indicator indicatorColor={indicatorColor} />}
    </Touchable>
  );
};
