import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux'
import configureStore from './app/configureStore'
import { Container, Content, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import theme from './native-base-theme/variables/material';
import { border, flexContainer, headerStyle} from '@utils/style'

import Home from '@app/containers/Home';
import LoginScreen from '@app/containers/LoginScreen';
import ResellerScreen from '@app/containers/ResellerScreen';


const store = configureStore()

import { createStackNavigator } from 'react-navigation';


const RootStack = createStackNavigator({
  LoginScreen: LoginScreen,
  Home: Home,
  ResellerScreen: ResellerScreen,
},
{
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    ...headerStyle
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(theme)}>
          <RootStack />
        </StyleProvider>
      </Provider>
    );
  }
}
