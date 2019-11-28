import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  background-color: #ccc;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #cecece;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
`;

export const Icon = styled.View``;
