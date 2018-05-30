import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import {Resellers, Loading, Icon, NavbarIcon} from '@app/components'
import { Container, Content, List, ListItem } from 'native-base';
import {setTitle} from '../store/header/header.actions'
import {fetchResellers} from '../store/resellers/resellers.actions'
import { border, flexContainer, headerStyle} from '@utils/style' 

class Home extends React.Component {
  
  static navigationOptions = ({ navigation }) => ({    
      title: 'Loppis',
      headerRight: (
        <NavbarIcon 
            icon="add"
            onPress={ () => Alert.alert('world') }
        />
      ),
    });

  constructor(props){
    super(props)

    this.state = {
      resellers: {}
    }
  }

  componentWillMount(){
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
    //console.log('###RESELLERS.length', response)
    return (
          <Container style={[styles.container]}>
            <Content style={[flexContainer]}>
              {loading
                ? <Loading /> 
                : <Resellers items={data} navigation={this.props.navigation}/>}
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
