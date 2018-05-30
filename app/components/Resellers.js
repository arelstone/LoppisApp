import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import {flexContainer, border, fadedText, smallText, marginR} from '@utils/style'
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Resellers extends Component {

    constructor(props){
        super(props)
    }

    handleOnPress = (item) => {
        const {navigation} = this.props
        navigation.navigate('ResellerScreen', {reseller: item})
    }

    render() {
        const { items, onPress } = this.props
        
        return <List style={[flexContainer]}>
            {Boolean(items) && items.map(item => 
            <ListItem key={item.id}
                onPress={() => this.handleOnPress(item)}
                avatar>
                <Left>
                    <Text style={[styles.textSmall]}>Avatar</Text>
                </Left>
                <Body>
                    <Grid>
                        <Row>
                            <Text>{item.name}</Text>
                        </Row>
                        <Row>
                            <Text style={[styles.textSmall, marginR(5)]}>{item.address}</Text>
                            <Text style={[styles.textSmall]}>{item.city}</Text>
                        </Row>
                    </Grid>
                </Body>
            </ListItem>
            )}
        </List>;
    }
}

const styles = StyleSheet.create({
    textSmall: {
        ...fadedText,
        ...smallText
    }
})