import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
    NavigationActions,
    NavigationParams,
    NavigationScreenProps
} from 'react-navigation'
import styles from '../styles/style';

// import JSONPrettify from '../utils/JSONPrettify';

class Login extends React.Component<NavigationScreenProps<NavigationParams>> {
    constructor(props: NavigationScreenProps<NavigationParams>) {
        super(props)
        // console.log('Login constructor this: ' + JSONPrettify(this));
    }

    navigateToMainApp() {
        // Navigate to the Main App
        const subAction = NavigationActions.navigate({
                        routeName: 'Index'});
        const action = NavigationActions.reset({
            index: 0,
            key: 'MainApp',
            actions: [
                NavigationActions.navigate({
                    routeName: 'MainApp', params: {title: 'Main'}, action: subAction
                })
            ]
        })

        this.props.navigation.dispatch(action);
    }

    render(): any {
        return (
            <View style={styles.container}>
                <Text>
                    Edit login.tsx to implement your own onboarding logic.
                </Text>
                <TouchableOpacity onPress={() => this.navigateToMainApp()}>
                    <Text>Go to Main application</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Login;