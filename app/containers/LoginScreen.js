import React from 'react';
import {StyleSheet, View} from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Form, Button, Text} from 'native-base';
import {Input} from '@components'
import Validator from 'validator';
import {login} from '@store/user/user.actions'

class LoginScreen extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			form: {
				email: 'arelstone@gmail.com',
				password: '!!foobar111',
			},
			validationErrors: {
				email: '',
				password: ''
			}
		}
	}
	render(){
		const {form, validationErrors} = this.state

		return <Container>
			<Content padder>
				<Form>
					<Input
						label="Email"
						value={form.email}
						validationError={validationErrors.email}
						onTextChange={value => this.handleOnTextChange('email', value)}
						onEndEditing={e => this.handleInputValidation('email', e)}
						autoCorrect={false}
					/>
					<Input
						secureTextEntry
						label="Password"
						value={form.password}
						validationError={validationErrors.password}
						onTextChange={value => this.handleOnTextChange('password', value)}
						onEndEditing={e => this.handleInputValidation('password', e)}
					/>
					<View style={styles.buttonContainer}>
						<Button onPress={this.handleOnButtonPress}>
							<Text>Login</Text>
						</Button>
					</View>
				</Form>
			</Content>
		</Container>
	}


	handleInputValidation = (key, {nativeEvent: {text}}) => {
		switch (key) {
			case 'email': {
				if (Validator.isEmpty(text)) {
					return this.handleSetValidationError(key, 'Is empty')
				}
				
				if (!Validator.isEmail(text)) {
					return this.handleSetValidationError(key, 'Is not a email')
				}
				
				return this.handleSetValidationError(key, null);
			}
			case 'password': {
				if (Validator.isEmpty(text)) {
					return this.handleSetValidationError(key, 'Is empty')
				}

				if (!Validator.isLength(text, {min: 8})) {
					return this.handleSetValidationError(key, 'Is too short')

				}
				
				return this.handleSetValidationError(key, null);
			}
			default: return true;
		}
	}

	handleSetValidationError = (key, value) => {
		this.setState({
			validationErrors: {
				...this.state.validationErrors,
				[key]: value
			}
		})
	}
	
	handleOnTextChange = (key, value) => {
		this.setState({
			form: {
				...this.state.form,
				[key]: value
			}
		})
	}

	handleOnButtonPress = () => {
		const {dispatch} = this.props;
		const {form} = this.state;

		dispatch(login(form))
	}
};

export default connect(state => state)(LoginScreen);

const styles = StyleSheet.create({
	buttonContainer: {
		marginVertical: 30
	}
})