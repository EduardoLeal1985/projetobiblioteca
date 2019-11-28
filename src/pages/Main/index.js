import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, SubmitButton } from './styles';

export default class Main extends Component {
  static navigationOptions = {
    title: <Icon name="home" size={20} color="#000" />,
  };

  render() {
    return (
      <Container>
        <Form>
          <SubmitButton>
            <Icon name="add" size={20} color="#000" />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
