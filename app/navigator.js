import { createStackNavigator } from 'react-navigation';
import { headerStyle } from '@utils/style'

import Home from '@app/containers/Home';
import LoginScreen from '@app/containers/LoginScreen';
import RegisterScreen from '@app/containers/RegisterScreen';
import ResellerScreen from '@app/containers/ResellerScreen';


const StackNavigator = createStackNavigator({
    LoginScreen,
    RegisterScreen,
    Home,
    ResellerScreen,
  },
  {
    initialRouteName: 'LoginScreen',
    navigationOptions: {
      ...headerStyle
    }
  })

  export default StackNavigator