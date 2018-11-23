import React from 'react';
import StarRating from 'react-native-star-rating';
import PropTypes from 'prop-types';

class Rating extends React.PureComponent {
	render(){
		const {rating} = this.props;

		return <StarRating
			maxStars={5}
			rating={rating || 0}
			halfStarEnabled
			disabled
			starSize={15}
		/>
	}
}

Rating.propTypes = {
	rating: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	onPress: PropTypes.func

}

export default Rating;