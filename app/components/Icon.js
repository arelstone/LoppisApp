import React, {PureComponent} from 'react';
import {Icon as NBBIcon} from 'native-base';
import PropTypes from 'prop-types';
import colors from '@app/utils/colors';

export default class Icon extends PureComponent {

    static propTypes = {
        name: PropTypes.string.isRequired
    }
    render() {
        const {name} = this.props
        return <NBBIcon
            name={name} 
            {...this.props}
        />
    }
}