import React, {
    PureComponent
} from 'react';
import {
    Text, StyleSheet
} from 'react-native';
import {List, ListItem } from 'native-base';
import colors from '@app/colors'

export default class Resellers extends PureComponent {

    render() {
        const { items } = this.props
        
        return <List>
            {Boolean(items) && items.map(item => 
            <ListItem key={item.id}>
                <Text style={styles.text}>{item.name}</Text>
            </ListItem>
            )}
        </List>;
    }
}

const styles = StyleSheet.create({
    text: {
    },
    content: {
    }
})