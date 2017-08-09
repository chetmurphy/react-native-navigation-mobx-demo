import {

  NavigationParams,
  NavigationScreenProps,
  StackNavigator
} from 'react-navigation';

import Index from '../screens/Index';
import Search from '../screens/Search';
import JSONPrettify from '../utils/JSONPrettify';

const Expo = require('expo');

const AppNavigator = StackNavigator({
  Index: { screen: Index },
  Search: { screen: Search }
}, {
    initialRouteName: 'Index',
    navigationOptions: (props: NavigationScreenProps<NavigationParams>) => ({
      debug: console.log('AppNavigator navigationOptions param: ' + JSONPrettify(props)),
      title: props.navigation.state.params && props.navigation.state.params.title,
      headerStyle: { marginTop: Expo.Constants.statusBarHeight }
    })
  });

export default AppNavigator;