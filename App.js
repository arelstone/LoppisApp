import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './app/configureStore'
import { StyleProvider, Root } from 'native-base';
import getTheme from './native-base-theme/components';
import theme from './native-base-theme/variables/platform';
import {AppNavigationStack} from './app/navigator'

const store = configureStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(theme)}>
          <Root>
            <AppNavigationStack />  
          </Root>
        </StyleProvider>
      </Provider>
    );
  }
}
