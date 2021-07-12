import { AuthContext } from '@/contexts';
import { deleteSInfoKey, LOGGED } from '@/utils';
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const SignUpScreen = () => {
  const authContext = useContext(AuthContext);

  const onPressLogout = () => {
    deleteSInfoKey(LOGGED);
    authContext.dispatch({
      type: 'UPDATE_LOGGED',
      logged: false,
    });
  };
  return (
    <View>
      <Text>Home screen</Text>
      <TouchableOpacity onPress={onPressLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
