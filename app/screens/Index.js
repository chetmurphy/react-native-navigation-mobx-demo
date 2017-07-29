import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from '../styles/style';

class Index extends React.Component {
  render() {
    const {navigate, setParams, state} = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>Index screen</Text>
        <TouchableOpacity onPress={()=>navigate("Search", {title: "Search", parentKey: state.key})}>
          <Text>Go to Search</Text>
        </TouchableOpacity>
        <Text>{ state.params && `Searched for ${state.params.search}` }</Text>
      </View>
    )
  }
}

export default Index;