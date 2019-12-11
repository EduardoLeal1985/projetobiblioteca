import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  static propTypes = {
    navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleEmprestimo = () => {
    const { navigation } = this.props;
    navigation.navigate('Emprestimo');
  };

  handleDevolucao = () => {
    const { navigation } = this.props;
    navigation.navigate('Devolucao');
  };

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
          <SubmitButton1 onPress={this.handleEmprestimo}>
            <Icon name="book-plus" size={40} color="#333" />
            <Text>Emprestar</Text>
          </SubmitButton1>
          <SubmitButton2 onPress={this.handleDevolucao}>
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
