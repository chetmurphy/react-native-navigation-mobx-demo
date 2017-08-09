"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_navigation_1 = require("react-navigation");
const AppNavigator_1 = require("../navigators/AppNavigator");
const Login_1 = require("../screens/Login");
const RootNavigator = react_navigation_1.StackNavigator({
    Login: { screen: Login_1.default },
    MainApp: { screen: AppNavigator_1.default }
}, {
    headerMode: 'none'
});
exports.default = RootNavigator;
