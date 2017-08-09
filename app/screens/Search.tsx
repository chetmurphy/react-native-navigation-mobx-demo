import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  NavigationActions,
  NavigationParams,
  NavigationScreenProps
} from 'react-navigation';

import styles from '../styles/style';

class Search extends React.Component<NavigationScreenProps<NavigationParams>, {}> {
  updateHome = (params: NavigationParams) => {
    const {state, dispatch, goBack} = this.props.navigation
    dispatch(NavigationActions.setParams({
      params,
      key: state.params.parentKey
    }))

    goBack(undefined);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Search screen</Text>
        <TouchableOpacity onPress={() => this.updateHome({search: 'Cats', title: 'Cats'})}>
          <Text>Search for Cats</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.updateHome({search: 'Dogs', title: 'Dogs'})}>
          <Text>Search for Dogs</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Search;