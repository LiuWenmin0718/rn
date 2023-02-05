/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// 加上这句可以在chrom的NetWork里面查看网络请求
global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest;

// 解决网络请求中报错报错： Unexpected token 'o', "[object Blob]" is not valid JSON
global.Blob = global.originalBlob ? global.originalBlob : global.Blob;
global.FileReader = global.originalFileReader ? global.originalFileReader : global.FileReader;


AppRegistry.registerComponent(appName, () => App);
