import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  align-items: center;
  background-color: #fff;
`;

export const Text = styled.Text`
  color: #333;
  font-family: 'Roboto';
  margin-top: 10px;
`;

export const CameraButton = styled(RectButton)`
  flex: 1;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: 1px solid black;
  background-color: #ccc;
  text-align: center;
`;

export const Form = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #fff;
`;
