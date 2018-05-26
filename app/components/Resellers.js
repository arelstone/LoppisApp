import React, {PureComponent} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {List, ListItem } from 'native-base';
import {flexContainer, border, fadedText, smallText, marginR} from '@utils/style'
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Resellers extends PureComponent {

    handleOnPress = (id) => {
        console.log('###ID', id)
    }

    render() {
        const { items, onPress } = this.props
        
        return <List style={[flexContainer]}>
            {Boolean(items) && items.map(item => 
            <ListItem key={item.id}
                onPress={() => this.handleOnPress(item.id)}>
                <Grid>
                    <Row>
                        <Text>{item.name}</Text>
                    </Row>
                    <Row>
                        <Text style={[styles.textSmall, marginR(5)]}>{item.address}</Text>
                        <Text style={[styles.textSmall]}>{item.city}</Text>
                    </Row>
                </Grid>
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