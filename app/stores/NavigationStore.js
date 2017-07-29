import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {  StackNavigator } from 'react-navigation'

import { observable, action } from 'mobx'

class NavigationStore {
  @observable.ref navigationState = {
    index: 0,
    routes: [
      { key: "Index", routeName: "Index" },
    ],
  }

  // NOTE: the second param, is to avoid stacking and reset the nav state
  @action dispatch = (action, stackNavState = true) => {
    const previousNavState = stackNavState ? this.navigationState : null;
    return this.navigationState = AppNavigator
        .router
        .getStateForAction(action, previousNavState);
  }
};