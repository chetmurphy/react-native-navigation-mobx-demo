 import {
     StackNavigator
} from 'react-navigation';

 import AppNavigator from '../navigators/AppNavigator';
 import Login from '../screens/Login';

 const RootNavigator = StackNavigator(
  {
    Login: { screen: Login },
    MainApp: { screen: AppNavigator }
  },
  {
    headerMode: 'none'
  }
);

export default RootNavigator;