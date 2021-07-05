import React, { forwardRef, Ref, useMemo, useState } from 'react';
import { TextInput, View } from 'react-native';
import { useLayout } from '@react-native-community/hooks';
import { IconMorphosis } from '@/assets';
import { COLORS, useTheme } from '@/theme';
import { Text } from '../text';
import { Touchable } from '../touchable';
import { FONT_TYPES } from './constants';
import { useStylesTextField } from './styles';
import { TextFiledProps } from './types';

export const TextField = forwardRef(
  (
    {
      fontType = 'INTER',
      style,
      renderLeftAccessory,
      renderRightAccessory,
      inputStyle,
      label,
      labelStyle,
      labelContentStyle,
      prefix,
      suffix,
      prefixStyle,
      secureTextEntry,
      selectionColor = COLORS.MANDY,
      ...other
    }: TextFiledProps,
    ref: Ref<TextInput>,
  ) => {
    const { typography } = useTheme();
    const styles = useStylesTextField();
    const [showSecureTextEntry, setSecureTextEntry] = useState(false);
    const { onLayout, height } = useLayout();

    const contentRight = useMemo(() => {
      if (!secureTextEntry) {
        return renderRightAccessory?.();
      }
      if (!renderRightAccessory) {
        function showPassword() {
          setSecureTextEntry(prev => !prev);
        }
        return (
          <Touchable onPress={showPassword}>
            <IconMorphosis
              name={
                showSecureTextEntry
                  ? IconMorphosis.icons.UNHIDDEN
                  : IconMorphosis.icons.HIDDEN
              }
              style={styles.iconHidden}
            />
          </Touchable>
        );
      }
      return renderRightAccessory?.();
    }, [
      renderRightAccessory,
      secureTextEntry,
      showSecureTextEntry,
      styles.iconHidden,
    ]);

    return (
      <View style={[styles.content, style]}>
        {!!label && (
          <View
            {...{ onLayout }}
            style={[styles.vLabel, { top: -height / 2 }, labelContentStyle]}>
            <Text
              style={[
                typography[FONT_TYPES[fontType]],
                styles.label,
                labelStyle,
              ]}>
              {label}
            </Text>
          </View>
        )}
        {renderLeftAccessory?.()}
        {!!prefix && (
          <Text
            style={[
              typography[FONT_TYPES[fontType]],
              styles.prefix,
              prefixStyle,
            ]}>
            {prefix}
          </Text>
        )}
        <TextInput
          style={[styles.input, typography[FONT_TYPES[fontType]], inputStyle]}
          underlineColorAndroid="transparent"
          selectionColor={selectionColor}
          secureTextEntry={!showSecureTextEntry && secureTextEntry}
          {...{ ref, ...other }}
        />
        {!!suffix && (
          <Text style={[typography[FONT_TYPES[fontType]], styles.prefix]}>
            {suffix}
          </Text>
        )}
        {contentRight}
      </View>
    );
  },
);
