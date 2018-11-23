import React from 'react';
import {View} from 'react-native';
import { Item, Input as NBInput, Label, Text, Icon } from 'native-base';
import PropTypes from 'prop-types';

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
				{hasError && <Icon name='close-circle' />}
			</Item>
			<Text>{validationError}</Text>
		</View>;
  }
}

Input.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string,
	onTextChange: PropTypes.func.isRequired,
	validationError: PropTypes.string,
}

export default Input;