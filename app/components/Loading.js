import React, {Component} from 'react';
import {StyleSheet} from 'react-native'
import {DotIndicator} from 'react-native-indicators';
import colors from '@utils/colors'

export default class Loading extends Component {
    render() {
        return <DotIndicator 
            color={colors.blue} 
            style={styles.container} 
        />
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 30,
    }
})