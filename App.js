import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import Home from '@app/containers/Home';
import { Provider } from 'react-redux'
import configureStore from './app/configureStore'

const store = configureStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
