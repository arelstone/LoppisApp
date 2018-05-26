import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import {Header, Resellers, Loading} from '@app/components'
import { Container, Content, List, ListItem } from 'native-base';
import {setTitle} from '../store/header/header.actions'
import {fetchResellers} from '../store/resellers/resellers.actions'
import colors from '@utils/colors'
import { border, flexContainer} from '@utils/style'

class Home extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      resellers: {}
    }
  }

  componentDidMount(){
    const {dispatch} = this.props
    dispatch(fetchResellers())
  }

  render() {
    const {
      header: {title},
      resellers: {
        loading,
        response: {data}
      }
    } = this.props
    
    return (
          <Container style={[styles.container]}>
            <Header title={'Loppis'}/>
          
            <Content style={[flexContainer]}>
              {loading
                ? <Loading /> 
                : <Resellers items={data}/>}
            </Content>
          </Container>
    );
  }
}
export default connect(props => props)(Home)


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%'
  },
});
