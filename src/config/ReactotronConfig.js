import Reactotron from 'reactotron-react-native';

// tudo que estiver aqui dentro do if não será executado em ambiente de produção
if (__DEV__) {
  const tron = Reactotron.configure({ host: 'localhost' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
