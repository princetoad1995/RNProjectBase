import { AuthContext } from '@/contexts';
import { getSInfoItem, LOGGED } from '@/utils';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { IScreen } from './BaseRoutes';
import { authScreens, homeScreens } from './routesConfig';

const Stack = createStackNavigator();

const Routes = () => {
  const [routes, setRoutes] = useState<IScreen[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    getSInfoItem(LOGGED).then((result: string | undefined) => {
      setLoading(false);
      authContext.dispatch({
        type: 'UPDATE_LOGGED',
        logged: !!result,
      });
    });
  }, []);

  useEffect(() => {
    !loading && setRoutes(authContext.state.logged ? homeScreens : authScreens);
  }, [authContext, loading]);

  if (!routes.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Stack.Navigator>
        {routes.map(route => (
          <Stack.Screen
            key={route.name}
            name={route.name}
            component={route.component}
            options={route.options}
          />
        ))}
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Routes;
