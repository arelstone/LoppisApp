import React from 'react';
import {View, Text} from 'react-native';

class Reviews extends React.Component {
    render(){
        const {reviews} = this.props;
        return <View>
            <Text>Reviews Tab</Text>
        </View>
    }
}

export default Reviews;