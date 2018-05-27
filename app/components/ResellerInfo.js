import React, {Component} from 'react';
import {StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {Text, Content, H1} from 'native-base'
import {Grid, Col, Row} from 'react-native-easy-grid'
import {border} from '@app/utils/style'
import colors from '@app/utils/colors'

class ResellerInfo extends Component {

    render() {
        const {
            info
        } = this.props

        return <Content padder style={styles.container}>
            <Grid style={styles.grid}>
                <Row>
                    <H1 style={[styles.text]}>{info.name}</H1>
                </Row>
                <Row>
                    <Text style={[styles.text]}>{info.address}</Text>
                </Row>
                <Row>
                    <Text style={[styles.text]}>{info.zip} {info.city}</Text>
                </Row>
            </Grid>
        </Content>;
    }
}

export default connect(state => state)(ResellerInfo)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.purple,
    },
    grid: {
        paddingVertical: 50,        
    },
    text: {
        textAlign: 'center',
        color: colors.white
    }
});