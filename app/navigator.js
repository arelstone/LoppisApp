import { createStackNavigator } from 'react-navigation';
import { headerStyle } from '@utils/style'
import HomeScreen from '@app/containers/Home';


const StackNavigator = createStackNavigator({
  HomeScreen,
  },
  {
    initialRouteName: 'HomeScreen',
    navigationOptions: {
      ...headerStyle
    }
  })

  export default StackNavigator