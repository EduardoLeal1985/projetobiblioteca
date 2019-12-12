import React, { Component } from 'react';
import {} from 'react-native-camera';
// import { View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Form,
  CameraButton,
  Input,
  Container2,
  SubmitButton,
  SearchButtonText,
} from './styles';

export default class Emprestimo extends Component {
  static navigationOptions = {
    title: 'Empréstimo',
  };

  handleSearchBook = pesquisa => {
    console.tron.log(pesquisa);
  };

  render() {
    return (
      <Container>
        <Form>
          <Container2>
            <CameraButton>
              <Icon name="camera" size={40} color="#777" />
            </CameraButton>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Pesquisar por título ou autor"
              returnKeyType="send"
              onSubmitEditing={this.handleSearchBook}
            />
            <SubmitButton
              onPress={() => {
                this.handleSearchBook();
              }}
            >
              <Icon name="magnify" size={20} color="#FFF" />
              <SearchButtonText>Pesquisar</SearchButtonText>
            </SubmitButton>
          </Container2>
        </Form>
      </Container>
    );
  }
}
