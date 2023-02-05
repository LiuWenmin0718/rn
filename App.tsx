import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';

// import Index from './src_01_StyleSheet';

// import Index from './src_02_Flexbox/flex';
// import Index from "./src_02_Flexbox/flexDirection"
// import Index from "./src_02_Flexbox/justifyContent"
// import Index from "./src_02_Flexbox/alignItems"

 // import Index from "./src_03_Demisions/index"

// import Index from "./src_04_Alert_Button/index"

// import Index from "./src_05_Switch_StatuBar/index"  //开关  手机顶部状态条

// import Index from "./src_06_ActivityIndicator/index"  //loading状态

// import Index from "./src_10_scrollView/index"

// import Index from "./src_11_SectionLit/index"

import Index from "./src_12_FlatLit/index"

// import Index from './src_22_StackNavigator/index';
// import Index from "./src_23_BottomTabs/index"
// import Index from "./src_24_DrawerNavigator/index"
// import Index from "./src_25_MaterialTopTabsNavigator/index"
// import Index from "./src_26_NestingNavigators/index"
// import Index from "./src_27_PassingParameters/index"

// import Index from "./src_28_API/index"

// import Index from "./src_Native_Toast_Android/index"

// import Index from "./src_Native_UIManager_Android/index"

// import Index from "./src_Native_EventEmitter_Android/index"

// import Index from "./src_FormLink/test"

// import Index from "./src_Fetch/index"

// import store from './Redux/store';
// import Index from "./src_Redux/index"
import { Provider } from "react-redux";

export default class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      //   <NavigationContainer>
      //     <Index />
      //   </NavigationContainer>
      // </Provider>
      <NavigationContainer>
        <Index />
      </NavigationContainer>
    );
  }
}
