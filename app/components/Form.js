import React, {
    Component
} from 'react';
import {Container, Content, Text, Button} from 'native-base'
import FormGenerator from 'react-native-form-builder';
import FormTheme from '../../native-base-theme/form-theme';
import propTypes from 'prop-types';

export default class Form extends Component {
    static propTypes = {
        fields: propTypes.array.isRequired,
        values: propTypes.func.isRequired
    }

    render() {
        const {fields, values} = this.props
        return <FormGenerator 
            fields={fields}
            theme={FormTheme}
            ref={values}
            {...this.props}
        />
    }
}
