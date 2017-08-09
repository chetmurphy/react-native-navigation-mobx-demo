import * as mobx from 'mobx';
import {
  addNavigationHelpers,
  NavigationAction,
  NavigationState
} from 'react-navigation';

import RootNavigator from '../navigators/RootNavigator';
import JSONPrettify from '../utils/JSONPrettify';

// 'import' non-typescript modules
const config = require('../../config');

export default class NavigationStore {
  @mobx.observable.ref screenProps: [{ key: 'any' }]

  @mobx.observable.ref navigationState: NavigationState = {
    index: 0,
    routes: [{
      key: 'Login',
      routeName: 'Login',
      params: { title: 'Initialization' }
    }]
  }

  @mobx.action dispatch = (navigationAction: NavigationAction): boolean => {
    if (__DEV__ && config.NAV_STORE_DISPATCH_LOGGING) {
      if (!!console.groupCollapsed) console.group('STORE DISPATCH ACTION');
      console.log('NavigationStore dispatch navigationAction: ' + JSONPrettify(navigationAction));
    }
    const previousNavState = /* stackNavState ? */ this.navigationState /* : undefined */;
    this.navigationState = RootNavigator
      .router
      .getStateForAction(navigationAction, previousNavState);

    if (__DEV__ && config.NAV_STORE_DISPATCH_LOGGING) {
      // console.log('NavigationStore dispatch previousNavState: ' + JSONPrettify(previousNavState));
      console.log('NavigationStore dispatch newNavState: ' + JSONPrettify(this.navigationState));
      if (!!console.groupCollapsed) console.groupEnd();
    }

    if (this.navigationState.routes) {
      this.screenProps = [{ key: this.navigationState.routes[this.navigationState.routes.length - 1].key }];
    }

    return !!this.navigationState;
  }

  storeAddNavigationHelpers() {
    const navigationProps  /* : NavigationProp<NavigationState, NavigationAction> */ = {
      state: this.navigationState,
      dispatch: this.dispatch
    };

    return addNavigationHelpers(navigationProps);
  }
}
