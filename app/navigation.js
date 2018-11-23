import {
	createBottomTabNavigator,
	createAppContainer,
	createStackNavigator
} from 'react-navigation';

import HomeScreen from '@containers/HomeScreen'
import UserScreen from '@containers/UserScreen'
import LoginScreen from '@containers/LoginScreen'


const HomeStack = createStackNavigator({
	Home: HomeScreen
});

const UserStack = createStackNavigator({
	User: UserScreen
});



export default createAppContainer(createBottomTabNavigator(
	{
		LoginScreen: LoginScreen,
		Home: HomeStack,
		User: UserStack
	}, 
	{
		initialRouteName: 'LoginScreen',
	}
));