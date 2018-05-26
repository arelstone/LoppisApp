import React from 'react';
import {Text, StyleSheet} from 'react-native';
import { Header as NBHeader, Left, Right , Body, Title, Icon} from 'native-base';

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        return <NBHeader style={styles.header}>
            <Left>
                
            </Left>
            <Body style={styles.title}>
                <Title>{this.props.title}</Title>
            </Body>
            <Right>
            </Right>
        </NBHeader>
    }
}


const styles = StyleSheet.create({
    header: {
      width: '100%'
    },
    //title: {paddingVertical: 15}
  });
  