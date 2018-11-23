import { createStackNavigator } from 'react-navigation';
import { headerStyle } from '@utils/style'
import HomeScreen from '@app/containers/Home';


export const AppNavigationStack = createStackNavigator({
  HomeScreen,
  },
  {
    initialRouteName: 'HomeScreen',
    navigationOptions: {
      ...headerStyle
    }
  })
