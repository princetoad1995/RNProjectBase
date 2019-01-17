import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Platform,
  Dimensions,
} from 'react-native';
import colors from '../../constants/colors';

const STATUSBAR_HEIGHT = getStatusBarHeight(true)

export function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 || dimen.width === 812)
  );
}
export function ifIphoneX(iphoneXStyle, regularStyle) {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
}
export function getStatusBarHeight(safe) {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight
  });
}

export function getBottomSpace() {
  return isIphoneX() ? 34 : 0;
}

export const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ height: STATUSBAR_HEIGHT, backgroundColor }}>
    <StatusBar
      translucent
      backgroundColor={colors.colorPrimaryDark}
      hidden={false}
      barStyle={'light-content'}
      {...props} />
  </View>
);

