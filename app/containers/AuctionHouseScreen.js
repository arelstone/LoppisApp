import React from 'react';
import {connect} from 'react-redux'
import {View, Text, Header, Body, Title} from 'native-base';
import {navigationStyle} from '@utils/style'

class AuctionHouseScreen extends React.Component {

	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.getParam('title'),
			...navigationStyle()
		};
	};

	render(){
		return <View>
			<Text>AuctionHouseScreen</Text>
		</View>
	}
};

const mapStateToProps = (state, ownProps) => {
	return {
		auctionHouse: state.auctionHouse.items.find(item => item.id === ownProps.navigation.getParam('id')),
		user: state.user,
	}
}

export default connect(mapStateToProps)(AuctionHouseScreen);