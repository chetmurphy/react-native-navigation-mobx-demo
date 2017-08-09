"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const react_navigation_1 = require("react-navigation");
const style_1 = require("../styles/style");
// import JSONPrettify from '../utils/JSONPrettify';
class Login extends React.Component {
    constructor(props) {
        super(props);
        // console.log('Login constructor this: ' + JSONPrettify(this));
    }
    navigateToMainApp() {
        // Navigate to the Main App
        const subAction = react_navigation_1.NavigationActions.navigate({
            routeName: 'Index'
        });
        const action = react_navigation_1.NavigationActions.reset({
            index: 0,
            key: 'MainApp',
            actions: [
                react_navigation_1.NavigationActions.navigate({
                    routeName: 'MainApp', params: { title: 'Main' }, action: subAction
                })
            ]
        });
        this.props.navigation.dispatch(action);
    }
    render() {
        return (<react_native_1.View style={style_1.default.container}>
                <react_native_1.Text>
                    Edit login.tsx to implement your own onboarding logic.
                </react_native_1.Text>
                <react_native_1.TouchableOpacity onPress={() => this.navigateToMainApp()}>
                    <react_native_1.Text>Go to Main application</react_native_1.Text>
                </react_native_1.TouchableOpacity>
            </react_native_1.View>);
    }
}
exports.default = Login;
