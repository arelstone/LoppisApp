import React from 'react';
import {connect} from 'react-redux'
import {View, Text, Tab, Tabs, Header} from 'native-base';
import {navigationStyle} from '@utils/style'
import {getReviews} from '@store/auctionHouses/auctionHouse.actions'
//import {Reviews} from '@components'
class AuctionHouseScreen extends React.Component {

	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.getParam('title'),
			...navigationStyle()
		};
	};


	render(){
		const {auctionHouse, reviews} = this.props
		
		return <View>
			<Text>wefsdfsdf</Text>
		</View>
	}
};



const mapStateToProps = (props, ownProps) => {
	const auctionHouse = props.auctionHouse.items.find(item => item.id === ownProps.navigation.getParam('id'));
	return {
		auctionHouse,
		reviews: auctionHouse.reviews,
	}
}

export default connect(mapStateToProps)(AuctionHouseScreen);
