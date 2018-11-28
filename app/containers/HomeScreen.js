import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchAuctionHouses } from '@store/auctionHouses/auctionHouse.actions';
import { smallText, microText, bigText, boldText, mb, fadedText } from '@utils/style';
import { Container, Content, List, ListItem, Row, Col, Left, Thumbnail } from 'native-base';
import colors from '../utils/colors';
import {Loading, Rating} from '@components'
import {t} from '@i18n'

class HomeScreen extends React.Component {

	static navigationOptions = {
		title: t('HOME_SCREEN_TITLE'),
	  };


	componentWillMount(){
		const { dispatch } = this.props;

		dispatch(fetchAuctionHouses());
	}

	render() {
		const {
			auctionHouse: { items, loading },
			navigation
		} = this.props;

		return (
			<Container>
				<Content>
					{loading 
						? <Loading /> 
						: <List dataArray={items}
							renderRow={(item) => <ListItem
								noIndent
								style={styles.listStyle}
								onPress={()=>{ navigation.navigate('AuctionHouse', {
									id: item.id, 
									title: item.name
								})}}
							>
								<Col>
									<Text style={[bigText, boldText]}>{item.name}</Text>
									<Text style={[smallText, mb]}>{item.description}</Text>
									<Text style={[microText, fadedText]}>{item.address}, {item.city}</Text>
								</Col>
								<Col>
									<Rating rating={item.rating}/>
								</Col>
							</ListItem>}
						/>
						}
				</Content>
			</Container>
		);
	}
}

export default connect(props => props)(HomeScreen);

const styles = StyleSheet.create({
	listStyle: {
		paddingVertical: 5,
		backgroundColor: colors.white
	}
})
