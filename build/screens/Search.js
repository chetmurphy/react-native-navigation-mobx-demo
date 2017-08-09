"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const react_navigation_1 = require("react-navigation");
const style_1 = require("../styles/style");
class Search extends React.Component {
    constructor() {
        super(...arguments);
        this.updateHome = (params) => {
            const { state, dispatch, goBack } = this.props.navigation;
            dispatch(react_navigation_1.NavigationActions.setParams({
                params,
                key: state.params.parentKey
            }));
            goBack(undefined);
        };
    }
    render() {
        return (<react_native_1.View style={style_1.default.container}>
        <react_native_1.Text>Search screen</react_native_1.Text>
        <react_native_1.TouchableOpacity onPress={() => this.updateHome({ search: 'Cats', title: 'Cats' })}>
          <react_native_1.Text>Search for Cats</react_native_1.Text>
        </react_native_1.TouchableOpacity>
        <react_native_1.TouchableOpacity onPress={() => this.updateHome({ search: 'Dogs', title: 'Dogs' })}>
          <react_native_1.Text>Search for Dogs</react_native_1.Text>
        </react_native_1.TouchableOpacity>
      </react_native_1.View>);
    }
}
exports.default = Search;
