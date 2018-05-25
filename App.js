import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import Theme from '@app/Theme';
import configureStore from './app/configureStore'

const store = configureStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Theme />
      </Provider>
    );
  }
}
