import {Navigation} from 'react-native-navigation';
import App from './App';
import Menu from './components/menu/Menu';

Navigation.registerComponent('com.myApp.Home', () => App);
Navigation.registerComponent('com.myApp.Menu', () => Menu);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.myApp.Home',
            },
          },
        ],
      },
    },
  });
});
