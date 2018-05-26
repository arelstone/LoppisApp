import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux'
import Home from '@app/containers/Home';
import configureStore from './app/configureStore'
import { Container, Content, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';
import { border, flexContainer} from '@utils/style'

const store = configureStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(platform)}>
          <Home />
        </StyleProvider>
      </Provider>
    );
  }
}
