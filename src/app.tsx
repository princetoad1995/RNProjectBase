import { NavigationContainer } from '@react-navigation/native';
import React, { ReactNode, useEffect, Suspense } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import { AuthProvider } from './contexts';
import { Routes } from './routers';

declare const global: { HermesInternal: null | {} };

const compose = (contexts: [any, any][], children: ReactNode) =>
  contexts.reduce((acc, [Element, props]) => {
    return <Element {...props}>{acc}</Element>;
  }, children);

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return compose(
    [
      [SafeAreaProvider, {}],
      [AuthProvider, {}],
    ],
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Suspense fallback="loading">
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </Suspense>
      </SafeAreaView>
    </>,
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
