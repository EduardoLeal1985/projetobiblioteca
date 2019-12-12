import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const CameraButton = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: #eee;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 10px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  width: 95%;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
  margin-top: 10px;
`;

export const Container2 = styled.View`
  align-items: center;
  margin: 0 20px 30px;
  flex: 1;
`;

export const SubmitButton = styled(RectButton)`
  margin-top: 10px;
  border-radius: 4px;
  background: #999;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 95%;
  flex-direction: row;
`;

export const SearchButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  margin-left: 5px;
`;
