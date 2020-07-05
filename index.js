import React from 'react';
import {Navigation} from 'react-native-navigation';
import App from './App';
import Menu from './components/menu/Menu';
import {BasketProvider} from './components/basket/BasketContext';
import FoodItemOptionsSelectionModal from './components/selection/FoodItemOptionsSelectionModal';
import MenuDealOptions from './components/menu/MenuDealOptions';
import BasketCheckout from './components/basket/BasketCheckout';
import CheckoutAddressEntry from './components/basket/CheckoutAddressEntry';

Navigation.registerComponent('com.myApp.Home', () => App);
Navigation.registerComponent(
  'com.myApp.CheckoutAddressEntry',
  () => CheckoutAddressEntry,
);
Navigation.registerComponent(
  'com.myApp.Menu',
  () => props => {
    return (
      <BasketProvider>
        <Menu {...props} />
      </BasketProvider>
    );
  },
  () => Menu,
);
Navigation.registerComponent(
  'com.myApp.FoodItemOptionsSelectionModal',
  () => props => {
    return (
      <BasketProvider>
        <FoodItemOptionsSelectionModal {...props} />
      </BasketProvider>
    );
  },
  () => FoodItemOptionsSelectionModal,
);
Navigation.registerComponent(
  'com.myApp.MenuDealOptions',
  () => props => {
    return (
      <BasketProvider>
        <MenuDealOptions {...props} />
      </BasketProvider>
    );
  },
  () => MenuDealOptions,
);
Navigation.registerComponent(
  'com.myApp.BasketCheckout',
  () => props => {
    return (
      <BasketProvider>
        <BasketCheckout {...props} />
      </BasketProvider>
    );
  },
  () => Menu,
);
Navigation.setDefaultOptions({
  statusBar: {},
  topBar: {
    backButton: {
      color: 'black',
    },
    background: {
      color: '#039894',
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
