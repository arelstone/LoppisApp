import React from 'react';
import {Icon as NBBIcon} from 'native-base';
import PropTypes from 'prop-types';

class Icon extends React.PureComponent {
    render() {

        const {name} = this.props
        console.log('###here', name)
        return <NBBIcon
            type="MaterialIcons"
            name={name} 
            {...this.props}
        />
    }
}

Icon.pporpTypes = {
    name: PropTypes.string.isRequired
}

export default Icon;