import React, {
    Component
} from 'react';
import {StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {Container, Content, Text, Button} from 'native-base'

import {LoginForm} from '@app/forms'
import {Form} from '@app/components'
import {handleAuth} from '../store/user/user.actions'

class LoginScreen extends Component {

    handleSubmit = async () => {
        const {dispatch, navigation} = this.props
        const {email, password} =  this.loginForm.getValues()

        await dispatch(handleAuth({email, password}))
        navigation.navigate('Home')

    }


    render() {
        const { navigation} = this.props
        
        return <Container>
                <Content>
                    <Form
                        values={c => this.loginForm = c} 
                        fields={LoginForm}
                        formData={{email: 'arelstone@gmail.com', password: '!!foobar111'}}
                    />
                    <Button 
                        block
                        onPress={() => this.handleSubmit()}
                    >
                        <Text>Login</Text>
                    </Button>
                    <Button 
                        block
                        onPress={() => navigation.navigate('RegisterScreen')}
                    >
                        <Text>Dont have an account? Register here!</Text>
                    </Button>
                </Content>
            </Container>
    }
}

export default connect(state => state)(LoginScreen)

const styles = StyleSheet.create({
})