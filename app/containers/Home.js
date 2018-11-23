import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchAuctionHouses } from '@store/auctionHouses/auctionHouse.actions';
import { smallText, microText, bigText, boldText, mb, fadedText } from '@utils/style';
import { Container, Content, List, ListItem, Row, Col, Left, Thumbnail } from 'native-base';
import StarRating from 'react-native-star-rating';
import colors from '../utils/colors';

class Home extends React.Component {

	static navigationOptions = ({ navigation }) => ({
		title: 'Loppe Guiden',
	});

	componentWillMount(){
		const { dispatch } = this.props;

		dispatch(fetchAuctionHouses());
	}

	render() {
		const {
			auctionHouse: { items }
		} = this.props;

		return (
			<Container>
				<Content>
					<List dataArray={items}
						onEndReached={() => {console.log('here');}}
						renderRow={(item) => <ListItem
							noIndent
							style={{ paddingVertical: 5, backgroundColor: colors.white }}
						>
							<Col>
								<Text style={[bigText, boldText]}>{item.name}</Text>
								<Text style={[smallText, mb]}>{item.description}</Text>
								<Text style={[microText, fadedText]}>{item.address}, {item.city}</Text>
							</Col>
							<Col>
								{<StarRating
									maxStars={5}
									rating={item.rating || 0}
									halfStarEnabled
									disabled
									starSize={15}
								/>}
							</Col>
						</ListItem>}
					/>
				</Content>
			</Container>
		);
	}
}
export default connect(props => props)(Home);
