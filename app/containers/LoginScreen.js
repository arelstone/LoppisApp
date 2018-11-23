import React from 'react';
import { connect } from 'react-redux';
import { Container, Content, Form, Button, Text} from 'native-base';
import {Input} from '@components'
import Validator from 'validator';

class LoginScreen extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			form: {
				email: '',
				password: '',
				name: '',
			},
			validationErrors : {
				email: '',
				password: '',
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
						onTextChange={value => this.handleOnTextChange('email', value)}
						value={form.email}
						validationError={validationErrors.email}
					/>
					<Input
						label="Password"
						onTextChange={value => this.handleOnTextChange('password', value)}
						value={form.password}
						secureTextEntry
					/>
					<Input
						label="Name"
						onTextChange={value => this.handleOnTextChange('name', value)}
						value={form.name}
					/>
					<Button onPress={this.handleOnButtonPress}>
						<Text>dfgdfgdfg</Text>
					</Button>
				</Form>
			</Content>
		</Container>
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
		this.setState({
			validationErrors: validate(this.state.form)
		})
	}
};

const validate = values => {
	const {email, password} = values;
	const errors = {
		email: '',
		password: '',
		name: ''
	}

	if (Validator.isEmpty(email)) {
		errors = 'Cannot be empty'
	}

	if (Validator.isLength(email, {min: 8})) {
		errors = 'Less then 8 charaters'
	}	

	if (!Validator.isEmail(email)) {
		errors = 'Is not a valid email'
	}

	return errors;
}


export default connect(state => state)(LoginScreen);
