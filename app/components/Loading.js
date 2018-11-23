import React from 'react';
import {StyleSheet, View} from 'react-native'
import {DotIndicator} from 'react-native-indicators';
import {Text, Row, Col} from 'native-base';
import PropTypes from 'prop-types';
import colors from '@utils/colors'
import {t} from '@i18n'

class Loading extends React.PureComponent {
	render() {
		const {showText} = this.props;

		return <View style={styles.container} >
				<DotIndicator 
					color={colors.blue}
            		style={styles.loadingIndicator}
				/>
				{showText && <View style={styles.textContainer}>
					<Text style={styles.text}>{t('LOADING')}</Text>
				</View>}
		</View>
	}
}

Loading.defaultProps = {
	showText: true
}

Loading.propTypes = {
	showText: PropTypes.bool
}

export default  Loading;

const styles = StyleSheet.create({
	container: {
        marginVertical: 30,
	},
	textContainer: {
		alignItems: 'center',
		marginVertical: 20,
	},
	text: {
		textAlign: 'center',
	}
})