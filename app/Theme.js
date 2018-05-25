import React, {
    Component
} from 'react';
import { Container, Content, Text, StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import Home from './containers/Home'

export default class Theme extends Component {

    render() {
        return <StyleProvider style={getTheme(material)}>
            <Container>
                <Content>
                    <Home />
                </Content>
            </Container>
        </StyleProvider>
    }
}