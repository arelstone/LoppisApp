import React, {
    Component
} from 'react';
import {connect} from 'react-redux'
import {Text, Content, Container, Button, Toast} from 'native-base'
import {Form} from '@app/components'
import {RegisterForm} from '@app/forms'
import uuid from 'uuid/v1'
import {handleRegister} from '../store/user/user.actions'

class RegisterScreen extends Component {

    handleSubmit = async () => {
        const {dispatch, navigation, user} = this.props
        const values = this.registerForm.getValues()

        await dispatch(handleRegister(values))
        
        navigation.navigate('Home')
        

    }
    render() {

        return <Container>
            <Content>
                <Form
                    fields={RegisterForm} 
                    values={c => this.registerForm = c}
                    formData={
                        {
                            name: 'Carsten',
                            email: `arelstone+${uuid()}@gmail.com`, 
                            password: '!!foobar111',
                            password_confirmation: '!!foobar111',
                        }
                    }
                />
                <Button 
                        block
                        onPress={() => this.handleSubmit()}
                    >
                        <Text>Signup</Text>
                    </Button>
            </Content>
        </Container>
    }
}

export default connect(state => state)(RegisterScreen)