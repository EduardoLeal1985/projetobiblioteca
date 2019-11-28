import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Form,
  SubmitButton1,
  SubmitButton2,
  SubmitButton3,
  SubmitButton4,
  Text,
  LogoEntrada,
} from './styles';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <Container>
        <LogoEntrada
          source={{
            uri:
              'https://image.freepik.com/free-vector/education-book-logo_7492-201.jpg',
          }}
        />
        <Form>
          <SubmitButton1>
            <Icon name="book-plus" size={40} color="#333" />
            <Text>Emprestar</Text>
          </SubmitButton1>
          <SubmitButton2>
            <Icon name="reply" size={40} color="#333" />
            <Text>Devolver</Text>
          </SubmitButton2>
          <SubmitButton3>
            <Icon name="library-plus" size={40} color="#333" />
            <Text>Cadastrar Livros</Text>
          </SubmitButton3>
          <SubmitButton4>
            <Icon name="account-plus" size={40} color="#333" />
            <Text>Cadastrar Usuários</Text>
          </SubmitButton4>
        </Form>
      </Container>
    );
  }
}
