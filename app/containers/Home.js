import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Header from '@app/components/Header'
import { Container} from 'native-base';
import {setTitle} from '../store/header/header.actions'
class Home extends React.Component {
  componentWillMount(){
    const {dispatch} = this.props
    dispatch(setTitle('fsdfsdf'))
  }
  
  render() {
    const {
      header: {title}
    } = this.props

    return (
      <View style={styles.container}>
          <Header title={title}/>
          <Container>
            <Text>sdfsdfdsf</Text>
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
  },
  header: {
    width: '100%'
  }
});
