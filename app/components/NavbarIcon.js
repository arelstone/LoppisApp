import React, {PureComponent} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types';
import {Icon} from '@app/components'
import colors from '@app/utils/colors'

export default class NavbarIcon extends PureComponent {
    /*static PropTypes = {
        icon: PropTypes.string.isRequired,
        onPress: PropTypes.func.isRequired
    }*/

    render() {
        const {onPress, icon} = this.props

        return <TouchableOpacity
            style={styles.button}
            onPress={onPress}
      >
        <Icon name={icon} style={styles.icon} />
      </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 15
    },
    icon: {
        color: colors.headerIconColor
    }
})