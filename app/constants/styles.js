import { StyleSheet, Dimensions, Platform } from 'react-native';
import colors from './colors';

let { width } = Dimensions.get('screen');

export const globalStyles = StyleSheet.create({
  styleTextToolbar: {
    fontSize: width / 24,
  },
  containerView: {
    flex: 1,
    backgroundColor: colors.white,
  },
});