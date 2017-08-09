import * as mobx from 'mobx';
import { observer } from 'mobx-react/native'; // Note 'native'
import * as React from 'react';

import RootNavigator from './navigators/RootNavigator';
import NavigationStore from './stores/NavigationStore';
import JSONPrettify from './utils/JSONPrettify';

// 'import' non-typescript modules

const config = require('../config');

if (__DEV__ && config.MOBX_SPY_LOGGING) {
  mobx.spy((spyReport) => {
    if (spyReport.type) {
      if (!!console.groupCollapsed) console.groupCollapsed(`%cMOBX SPY: ${spyReport.type}`, 'color: red; font-weight: 900;');
      console.log('%cMobx Spy Repot: ' + spyReport.type + ': rawSpyData: ' +
        JSONPrettify(spyReport), 'color: red; font-weight: 900;');
      if (!!console.groupCollapsed) console.groupEnd();
    }
  });
}

@observer
class AppRoot extends React.Component {
  store: NavigationStore;

  constructor(props: any, context: any) {
    super(props, context);
    this.store = new NavigationStore();

    if (__DEV__ && config.NAV_STORE_LOGGING) {
      mobx.autorun(() => {
         console.groupCollapsed('NAV STORE');
        console.log('%cAppRoot autorun this.store.navigationState: ' +
          JSONPrettify(this.store.navigationState), 'color: darkgreen; font-weight: 900;')
        console.log('%cAppRoot autorun this.store.navigationState.screenProps: ' +
          JSONPrettify(this.store.screenProps), 'color: darkgreen; font-weight: 900;')
        if (!!console.groupCollapsed) console.groupEnd();
      });
    }
  }

  render() {

    const navigationProp = this.store.storeAddNavigationHelpers();

    if (__DEV__ && config.TOPLEVEL_RENDER_LOGGING) {
      if (!!console.groupCollapsed) console.groupCollapsed('NAV RENDER')
      console.log('%cAppRoot render store' +
        JSONPrettify(this.store), 'color: blue; font-weight: 900;');
      console.log('%cAppRoot render navigationProp' +
        JSONPrettify(navigationProp), 'color: blue; font-weight: 900;');
      if (!!console.groupCollapsed) console.groupEnd();
    }

    return (
      <RootNavigator
        navigation={navigationProp}
        screenProps={this.store.screenProps}
      />
    );
  }
}

export default AppRoot;
