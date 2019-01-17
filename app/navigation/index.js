import React from 'react';
import { createStackNavigator, addNavigationHelpers, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';

console.disableYellowBox = true;

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
},
  {
    headerMode: 'none',
    mode: 'modal',
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
