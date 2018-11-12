import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content} from 'native-base';

class Home extends React.Component {
  
  static navigationOptions = ({ navigation }) => ({    
      title: 'Loppe Guiden',
    });


  render() {
    return (
          <Container>
            <Content>
              <Text>Hello world</Text>
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
