import React from 'react';
import {Navigation} from 'react-native-navigation';
import App from './App';
import Menu from './components/menu/Menu';
import BasketTopBar from './components/basket/BasketTopBar';
import {BasketProvider} from './components/basket/BasketContext';
import SelectionModal from './components/selection/SelectionModal';

Navigation.registerComponent('com.myApp.Home', () => App);
Navigation.registerComponent('com.myApp.Menu', () => Menu);
Navigation.registerComponent('com.myApp.SelectionModal', () => SelectionModal);
Navigation.registerComponent('com.myApp.BasketTopBar', () => BasketTopBar);
Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a',
  },
  topBar: {
    backButton: {
      color: 'black',
    },
    background: {
      color: '#f8bac7',
    },
  },
});
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
