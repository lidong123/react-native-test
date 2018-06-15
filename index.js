import { AppRegistry } from 'react-native';
import App from './App';
console.disableYellowBox = true;
console.warn('YellowBox is disabled.');

AppRegistry.registerComponent('ywApp', () => App);
