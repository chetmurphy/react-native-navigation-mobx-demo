"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const style_1 = require("../styles/style");
class Index extends React.Component {
    render() {
        const { navigate, state } = this.props.navigation;
        return (<react_native_1.View style={style_1.default.container}>
        <react_native_1.Text>Index screen</react_native_1.Text>
        <react_native_1.TouchableOpacity onPress={() => navigate('Search', { title: 'Search', parentKey: state.key })}>
          <react_native_1.Text>Go to Search</react_native_1.Text>
        </react_native_1.TouchableOpacity>
        <react_native_1.Text>{state.params && state.params.search && `Searched for ${state.params.search}`}</react_native_1.Text>
      </react_native_1.View>);
    }
}
exports.default = Index;
