import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './app/configureStore'
import { StyleProvider, Root } from 'native-base';
import getTheme from './native-base-theme/components';
import theme from './native-base-theme/variables/platform';
import Navigation from '@app/navigation'
import { PersistGate } from 'redux-persist/integration/react'

//const store = configureStore()
const { persistor, store } = configureStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StyleProvider style={getTheme(theme)}>
            <Root>
              <Navigation />  
            </Root>
          </StyleProvider>
        </PersistGate>
      </Provider>
    );
  }
}

console.ignoredYellowBox = ['Warning: isMounted(...) is deprecated'];