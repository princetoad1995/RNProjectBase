import {
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack';
import * as React from 'react';
import { Icons } from '@/core';
import { StyleSheet } from 'react-native';
import { Platform } from '@/theme';

export interface IScreen {
  name: string;
  component: React.FC<any>;
  options?: StackNavigationOptions;
}

const HeaderBackButton = () => (
  <Icons name="chevron-left" style={styles.containerHeaderBtn} size={20} />
);

export const baseHeaderOptions: StackNavigationOptions = {
  headerBackTitleVisible: false,
  headerStyle: {
    shadowOpacity: 0,
    elevation: 0,
  },
  headerTitleAlign: 'center',
  headerBackImage: HeaderBackButton,
  ...TransitionPresets.SlideFromRightIOS,
  safeAreaInsets: { top: 0, bottom: 0 },
};

const styles = StyleSheet.create({
  containerHeaderBtn: {
    paddingHorizontal: Platform.SizeScale(8),
  },
});
