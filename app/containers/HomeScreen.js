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
	componentWillMount(){
		const { dispatch } = this.props;

		dispatch(fetchAuctionHouses());
	}

	render() {
		const {
			auctionHouse: { items, loading }
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