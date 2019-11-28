import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  align-items: center;
  background-color: #fff;
`;

export const LogoEntrada = styled.Image`
  width: 250px;
  height: 250px;
`;

export const Form = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #fff;
`;

export const SubmitButton1 = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #ccff00;
  border-radius: 4px;
  margin-left: 10px;
  margin-top: 10px;
  padding: 0 12px;
  width: 125px;
  height: 125px;
`;

export const SubmitButton2 = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #fcba03;
  border-radius: 4px;
  margin-left: 10px;
  margin-top: 10px;
  padding: 0 12px;
  width: 125px;
  height: 125px;
`;

export const SubmitButton3 = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #bf8fd9;
  border-radius: 4px;
  margin-left: 10px;
  margin-top: 10px;
  padding: 0 12px;
  width: 125px;
  height: 125px;
`;

export const SubmitButton4 = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #a1bfe3;
  border-radius: 4px;
  margin-left: 10px;
  margin-top: 10px;
  padding: 0 12px;
  width: 125px;
  height: 125px;
`;

export const Text = styled.Text`
  color: #333;
  font-family: 'Roboto';
  margin-top: 10px;
`;
