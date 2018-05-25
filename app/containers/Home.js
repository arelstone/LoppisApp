import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import {Header, Resellers, Loading} from '@app/components'
import { Container, Content, List, ListItem } from 'native-base';
import {setTitle} from '../store/header/header.actions'
import {fetchResellers} from '../store/resellers/resellers.actions'
import colors from '@app/colors'

class Home extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      resellers: {}
    }
  }

  componentDidMount(){
    const {dispatch} = this.props
    dispatch(setTitle('fsdfsdf'))
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
      <View style={styles.container}>
          <Header title={title}/>
          <Container>
            <Content>
              {loading
                ? <Loading /> 
                : <Resellers items={data} />}
            </Content>
          </Container>
      </View>
    );
  }
}
export default connect(props => props)(Home)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bgColor
  },
  header: {
    width: '100%'
  },
});
