import { StackNavigator } from 'react-navigation';

import Index from '../screens/Index';
import Search from '../screens/Search';

const AppNavigator = StackNavigator({
  Index: { screen: Index },
  Search: { screen: Search },
}, {
  initialRouteName: 'Index',
  navigationOptions: {
    header: ({state}) => {
      return {title: state.params && state.params.title}
    },
  },
});