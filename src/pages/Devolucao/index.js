import React, { Component } from 'react';
import { View } from 'react-native';

import { Container, Text } from './styles';

export default class Devolucao extends Component {
  static navigationOptions = {
    title: 'Devolução',
  };

  render() {
    return (
      <Container>
        <View>
          <Text>Página de devolução</Text>
        </View>
      </Container>
    );
  }
}
