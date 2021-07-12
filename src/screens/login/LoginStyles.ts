import { StyleSheet } from 'react-native';
import { Platform, useTheme } from '@/theme';
import { useMemo } from 'react';

export const useStyleLogin = () => {
  const { colors } = useTheme();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          backgroundColor: colors.white,
          flex: 1,
        },
        loginContainer: {
          width: '80%',
          alignItems: 'center',
          padding: 10,
          elevation: 10,
          backgroundColor: '#e6e6e6',
        },
        containerTextInput: {
          flex: 1,
          marginLeft: Platform.SizeScale(10),
        },
        textInput: {
          height: Platform.SizeScale(40),
          flex: 1,
          backgroundColor: colors.white,
          borderBottomWidth: 1,
          marginBottom: Platform.SizeScale(5),
        },
        passwordInput: {
          flex: 1,
        },
        containerPassword: {
          flexDirection: 'row',
          flex: 1,
          height: Platform.SizeScale(40),
          backgroundColor: colors.white,
          borderBottomWidth: 1,
          alignItems: 'center',
          marginBottom: Platform.SizeScale(5),
        },
        titleStyle: {
          paddingHorizontal: Platform.SizeScale(30),
          paddingTop: Platform.SizeScale(30),
          color: colors.primary,
        },
        containerLogin: {
          padding: Platform.SizeScale(20),
        },
        containerEmail: {
          flexDirection: 'row',
          marginTop: Platform.SizeScale(10),
        },
        containerIcon: {
          borderBottomWidth: 1,
          borderBottomColor: colors.gray,
          justifyContent: 'center',
          height: Platform.SizeScale(40),
          marginRight: Platform.SizeScale(5),
        },
        imgMail: {
          fontSize: Platform.SizeScale(20),
          color: colors.primary,
        },
        forgotLabel: {
          paddingTop: Platform.SizeScale(30),
          color: colors.primary,
        },
        containerBtnForgot: {
          padding: Platform.SizeScale(10),
          alignSelf: 'flex-end',
        },
        containerBtnSubmit: {
          marginTop: Platform.SizeScale(70),
          marginBottom: Platform.SizeScale(10),
        },
        registerAccountTitle: {
          textAlign: 'center',
          marginTop: Platform.SizeScale(20),
          color: colors.black,
        },
        registerTitle: {
          color: colors.primary,
        },
      }),
    [colors],
  );
};
