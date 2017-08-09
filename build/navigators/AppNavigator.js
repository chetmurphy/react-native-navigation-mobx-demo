"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_navigation_1 = require("react-navigation");
const Index_1 = require("../screens/Index");
const Search_1 = require("../screens/Search");
const JSONPrettify_1 = require("../utils/JSONPrettify");
const Expo = require('expo');
const AppNavigator = react_navigation_1.StackNavigator({
    Index: { screen: Index_1.default },
    Search: { screen: Search_1.default }
}, {
    initialRouteName: 'Index',
    navigationOptions: (props) => ({
        debug: console.log('AppNavigator navigationOptions param: ' + JSONPrettify_1.default(props)),
        title: props.navigation.state.params && props.navigation.state.params.title,
        headerStyle: { marginTop: Expo.Constants.statusBarHeight }
    })
});
exports.default = AppNavigator;
