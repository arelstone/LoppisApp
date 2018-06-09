import React from 'react'
import {Text} from 'react-native'
import RNToast, {DURATION} from 'react-native-easy-toast'

export default class Toast extends React.PureComponent {
    render() {
        return <RNToast ref="toast"/>
    }
}