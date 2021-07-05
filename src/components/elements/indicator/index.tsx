import React, { memo } from 'react';
import { ActivityIndicator } from 'react-native';
import { useStyleIndicator } from './styles';
import { IndicatorProps } from './types';

const IndicatorBase = ({
  indicatorColor = 'mandy',
  style,
  ...other
}: IndicatorProps) => {
  const { styles, colors } = useStyleIndicator();

  return (
    <ActivityIndicator
      style={[styles.container, style]}
      {...other}
      color={colors[indicatorColor].toString()}
    />
  );
};

export const Indicator = memo(IndicatorBase);
