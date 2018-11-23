import React from 'react';
import { connect } from 'react-redux';
import { Container, Content, Form, Button, Text} from 'native-base';

class LoginScreen extends React.Component {

	constructor(props){
		super(props);
	}
	render(){
		return <Container>
			<Content padder>
				<Text>dgfhjfds</Text>
			</Content>
		</Container>
	}

	handleOnButtonPress = () => {
		console.log('###', inputValue(this.email))
	}
};

export default connect(state => state)(LoginScreen);