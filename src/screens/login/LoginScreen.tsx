import { AuthHeader, Button, Text, TextError } from '@/components';
import { AuthContext } from '@/contexts';
import { useTheme } from '@/theme';
import { LOGGED, setSInfoItem } from '@/utils';
import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useStyleLogin } from './LoginStyles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { IconMorphosis } from '@/assets';
import { ILoginResponse, loginApi } from '@/services';
import { FIELD_LOGIN, ILoginProps } from './types';
import { IResponseError } from '@/services/type';
import { setToken } from '@/services/network-services';

const LoginScreen = () => {
  const authContext = useContext(AuthContext);
  const { t } = useTranslation();
  const styles = useStyleLogin();
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const [fieldFocus, setFieldFocus] = useState<string>();
  const [errorLogin, setErrorLogin] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter valid email')
      .required('Email is required')
      .label('Email'),
    password: Yup.string()
      .min(6, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required')
      .label('Password'),
  });

  const onPressLogin = async (values: ILoginProps) => {
    setLoading(true);
    setErrorLogin('');
    const loginResponse: ILoginResponse | IResponseError = await loginApi({
      grant_type: 'password',
      client_id: 4,
      client_secret: 'ddk2JWgs0uwHGagDuFArhNijuD8gNYqIvJvILuAP',
      username: 'ilakin@example.com',
      password: 'password',
    });
    setLoading(false);
    console.log('values', values);
    if (loginResponse.status === 200 || loginResponse.status === 201) {
      const responseSuccess = loginResponse as ILoginResponse;
      setSInfoItem(LOGGED, responseSuccess.data.access_token).then(() => {
        setToken(responseSuccess.data.access_token);
        authContext.dispatch({
          type: 'UPDATE_LOGGED',
          logged: true,
        });
      });
    } else if (loginResponse.status === 0) {
      setErrorLogin(t('request_err'));
    } else {
      const responseError = loginResponse as IResponseError;
      setErrorLogin(responseError.data.message);
    }
  };

  const onPressRegister = () => {};

  return (
    <KeyboardAvoidingView
      style={styles.container}
      keyboardVerticalOffset={64 + insets.bottom}>
      <View style={styles.container}>
        <AuthHeader />
        <Text style={styles.titleStyle} fontWeight="700">
          {t('login.title')}
        </Text>
        <ScrollView>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={onPressLogin}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View style={styles.containerLogin}>
                <View style={styles.containerEmail}>
                  <View style={styles.containerIcon}>
                    <IconMorphosis
                      name={IconMorphosis.icons.CALENDAR_MINUS} // todo: change icon
                      style={styles.imgMail}
                    />
                  </View>
                  <View style={styles.containerTextInput}>
                    <TextInput
                      placeholder={t('login.email')}
                      style={[
                        styles.textInput,
                        {
                          borderBottomColor:
                            fieldFocus === FIELD_LOGIN.EMAIL
                              ? colors.primary
                              : colors.gray,
                        },
                      ]}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      keyboardType="email-address"
                      onFocus={() => setFieldFocus(FIELD_LOGIN.EMAIL)}
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                    {touched.email && errors.email && (
                      <TextError error={errors.email} />
                    )}
                  </View>
                </View>
                <View style={styles.containerEmail}>
                  <View style={styles.containerIcon}>
                    <IconMorphosis
                      name={IconMorphosis.icons.CALENDAR_MINUS} // todo: change icon
                      style={styles.imgMail}
                    />
                  </View>
                  <View style={styles.containerTextInput}>
                    <View
                      style={[
                        styles.containerPassword,
                        {
                          borderBottomColor:
                            fieldFocus === FIELD_LOGIN.PASSWORD
                              ? colors.primary
                              : colors.gray,
                        },
                      ]}>
                      <TextInput
                        placeholder={t('login.password')}
                        style={styles.passwordInput}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry
                        onFocus={() => setFieldFocus(FIELD_LOGIN.PASSWORD)}
                      />
                      <IconMorphosis
                        name={IconMorphosis.icons.EYS_OPEN} // todo: change icon
                        style={styles.imgMail}
                      />
                    </View>
                    {touched.password && errors.password && (
                      <TextError error={errors.password} />
                    )}
                  </View>
                </View>
                <TouchableOpacity style={styles.containerBtnForgot}>
                  <Text
                    style={styles.forgotLabel}
                    fontType="NOTOSANS_REGULAR"
                    size="m2"
                    fontWeight="400">
                    {t('login.forgotPass')}
                  </Text>
                </TouchableOpacity>
                <Button
                  isLoading={loading}
                  style={styles.containerBtnSubmit}
                  onPress={handleSubmit}
                  textSize="m3"
                  label={t('login.title')}
                />
                {!!errorLogin && <TextError error={errorLogin} />}
                <Text
                  parse={[
                    {
                      pattern: new RegExp(t('login.register')),
                      style: styles.registerTitle,
                      onPress: onPressRegister,
                    },
                  ]}
                  size="m2"
                  style={styles.registerAccountTitle}
                  fontType="NOTOSANS_REGULAR">
                  {t('login.noAccount', {
                    register: t('login.register'),
                  })}
                </Text>
              </View>
            )}
          </Formik>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
