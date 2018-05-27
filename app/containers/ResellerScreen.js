import React, {Component} from 'react';
import {Container, Content, Text, List, ListItem, View, Tabs, Tab} from 'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid'
import {connect} from 'react-redux';
import {Loading, ResellerInfo} from '@app/components'

import {fetchReseller, resetReseller} from '@app/store/reseller/reseller.actions'

class ResellerScreen extends Component {
    constructor(props) {
        super(props)
        this.param = props.navigation.getParam('reseller')
    }

    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('reseller').name,
        };
      };

    componentWillMount(){
        const {dispatch} = this.props
        const itemId = this.param.id;
        dispatch(fetchReseller(itemId))
    }

    componentWillUnmount(){
        this.props.dispatch(resetReseller())
    }

    render() {
        console.log('###', this.props.reseller.relationships)
        const {loading} = this.props.reseller
        
        return <Content>
                <ResellerInfo info={this.param}/>

                {loading ? <Loading/> : this.renderList()}
            </Content>;
    }

    renderList = () => {
        return <List>
        {Boolean(this.props.reseller.relationships) 
            && this.props.reseller.relationships.items.map(item => 
        <ListItem key={item.id}>
            <Grid>
                <Row>
                    <Text>{item.title}</Text>
                </Row>
            </Grid>
        </ListItem>
        )}
    </List>
    }
}
export default connect(state => state)(ResellerScreen)