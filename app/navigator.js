import { createStackNavigator } from 'react-navigation';
import { headerStyle } from '@utils/style'

import Home from '@app/containers/Home';


const StackNavigator = createStackNavigator({
    Home
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      ...headerStyle
    }
  })

  export default StackNavigator