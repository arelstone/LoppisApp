import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';
import {fetchAuctionHouses} from '@store/auctionHouses/auctionHouse.actions'
import {smallText, bigText, boldText} from '@utils/style'
import { Container, Content, List, ListItem, Row, Col} from 'native-base';
import StarRating from 'react-native-star-rating';
 
class Home extends React.Component {
	
	static navigationOptions = ({ navigation }) => ({    
			title: 'Loppe Guiden',
		});

		componentWillMount(){
			const {dispatch} = this.props;

			dispatch(fetchAuctionHouses())
		}

	render() {
		const {auctionHouse: {items}} = this.props
		return (
					<Container>
						<Content>
						<List dataArray={items}
							renderRow={(item) => <ListItem noIndent>
								<Col>
										<Text style={[bigText, boldText]}>{item.name}</Text>
										<Text style={[smallText]}>{item.description}</Text>
								</Col>
								<Col>
									{item.rating && <StarRating 
										maxStars={5}
										rating={item.rating}
										halfStarEnabled
										disabled
										starSize={15}
										buttonStyle={{padding: 0}}
									/>}
								</Col>
							</ListItem>}
							 />
						</Content>
					</Container>
		);
	}
}
export default connect(props => props)(Home)
