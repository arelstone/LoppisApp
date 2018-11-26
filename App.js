import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './app/configureStore'
import { StyleProvider, Root } from 'native-base';
import getTheme from './native-base-theme/components';
import theme from './native-base-theme/variables/platform';
import HomeScreen from './app/containers/HomeScreen'
import Navigation from '@app/navigation'


const store = configureStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(theme)}>
          <Root>
            <Navigation />  
          </Root>
        </StyleProvider>
      </Provider>
    );
  }
}

console.ignoredYellowBox = ['Warning: isMounted(...) is deprecated'];