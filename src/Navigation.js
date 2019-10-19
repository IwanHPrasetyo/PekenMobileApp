import {createStackNavigator} from 'react-navigation-stack';
import Login from './Pages/Login';
import {createAppContainer} from 'react-navigation';
import Home from './Pages/Home';
import History from './Pages/History';
import Ceckout from './Componens/Ceckout';
import Masterproduct from './Componens/Masterproduct';

const MainNavigation = createStackNavigator(
  {
    Login,
    Home,
    History,
    Ceckout,
    Masterproduct,
  },
  {
    headerMode: 'none',
    initialRouteKey: 'Login',
  },
  {
    headerMode: 'none',
    initialRouteKey: 'Home',
  },
  {
    headerMode: 'none',
    initialRouteKey: 'History',
  },
  {
    headerMode: 'none',
    initialRouteKey: 'Ceckout',
  },
  {
    headerMode: 'none',
    initialRouteKey: 'Masterproduct',
  },
);

export default createAppContainer(MainNavigation);
