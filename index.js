/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './src/app';
import { name as appName } from './app.json';
import './i18n';

AppRegistry.registerComponent(appName, () => App);
