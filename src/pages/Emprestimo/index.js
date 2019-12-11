import React, { Component } from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, Text, Form, CameraButton } from './styles';

export default class Emprestimo extends Component {
  static navigationOptions = {
    title: 'Empréstimo',
  };

  render() {
    return (
      <Container>
        <Form>
          <View>
            <Text>Página de empréstimo</Text>
          </View>
          <CameraButton>
            <Icon name="camera" size={40} color="#333" />
          </CameraButton>
        </Form>
      </Container>
    );
  }
}
