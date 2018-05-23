import React from 'react';
import {Text, StyleSheet} from 'react-native';
import { Header as NBHeader, Left, Right } from 'native-base';

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        return <NBHeader style={styles.header}>
            <Left></Left>
            <Text style={styles.title}>{this.props.title}</Text>
            <Right></Right>
        </NBHeader>
    }
}


const styles = StyleSheet.create({
    header: {
      width: '100%'
    },
    title: {fontSize: 20, paddingVertical: 10}
  });
  