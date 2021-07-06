import { AuthContext } from '@/contexts';
import { LOGGED, setSInfoItem } from '@/utils';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity } from 'react-native';

const LoginScreen = () => {
  const authContext = useContext(AuthContext);
  const { t } = useTranslation();

  const handlePress = () => {
    setSInfoItem(LOGGED, 'ok').then(() => {
      authContext.dispatch({
        type: 'UPDATE_LOGGED',
        logged: true,
      });
    });
  };
  return (
    <View style={{ backgroundColor: 'red' }}>
      <TouchableOpacity onPress={handlePress}>
        <Text>ahihi</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
