import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Item, Input as NBInput, Label, Text, Icon } from 'native-base';
import PropTypes from 'prop-types';
import {microText} from '@utils/style'
import colors from '@utils/colors'
class Input extends React.PureComponent {
	render() {
		const {label, value, onTextChange, validationError} = this.props;
		const hasError = Boolean(validationError)

		return <View>
			<Item 
				floatingLabel
				error={hasError}
			>
				<Label>{label}</Label>
				<NBInput
					{...this.props}
					value={value}
					onChangeText={onTextChange}
				/>
				{hasError && <Icon name='ios-close-circle-outline' type="Ionicons" />}
			</Item>
			<Text style={[microText, styles.validationErrorText]}>{validationError}</Text>
		</View>;
  }
}

Input.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string,
	onTextChange: PropTypes.func.isRequired,
	onBlur: PropTypes.func,
	onFocus: PropTypes.func,
	validationError: PropTypes.string,
}

export default Input;

const styles = StyleSheet.create({
	validationErrorText: {
		marginLeft: 15,
		color: colors.validationErrorText
	}
})