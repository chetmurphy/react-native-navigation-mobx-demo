import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from '../styles/style';

class Search extends React.Component {
  updateHome = (params) => {
    const {state, dispatch, goBack} = this.props.navigation
    dispatch(NavigationActions.setParams({
      params,
      key: state.params.parentKey,
    }))

    goBack(null)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Search screen</Text>

        <TouchableOpacity onPress={()=>this.updateHome({search: "Cats", title: "Cats"})}>
          <Text>Search for Cats</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.updateHome({search: "Dogs", title: "Dogs"})}>
          <Text>Search for Dogs</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Search;