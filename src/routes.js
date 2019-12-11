import { createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Emprestimo from './pages/Emprestimo';
import Devolucao from './pages/Devolucao';
import ManageBooks from './pages/ManageBooks';
import ManageUsers from './pages/ManageUsers';

const Routes = createAppContainer(
  createStackNavigator(
    { Main, Emprestimo, Devolucao, ManageBooks, ManageUsers },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#000',
      },
    }
  )
);

export default Routes;
