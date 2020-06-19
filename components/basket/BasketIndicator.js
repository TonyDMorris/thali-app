import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  TouchableHighlight,
} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {BasketContext} from './BasketContext';
import {Navigation} from 'react-native-navigation';

const BasketIndicator = () => {
  const context = useContext(BasketContext);
  const handlePress = () => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: 'com.myApp.BasketCheckout',
              options: {
                modalPresentationStyle: 'overCurrentContext',
              },
              passProps: {items: context.items, dealItems: context.dealItems},
            },
          },
        ],
      },
    });
  };
  const getTotalPriceAndQuantitiy = items => {
    return items.reduce(
      (acc, curr) => {
        acc.totalItems += curr.qty;
        acc.totalPrice += curr.price * curr.qty;
        return acc;
      },
      {
        totalPrice: 0,
        totalItems: 0,
      },
    );
  };
  const dealTotals = getTotalPriceAndQuantitiy(context.dealItems);
  const foodItemTotals = getTotalPriceAndQuantitiy(context.items);
  const totalPrice = dealTotals.totalPrice + foodItemTotals.totalPrice;
  const totalItems = dealTotals.totalItems + foodItemTotals.totalItems;

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handlePress}>
      <View style={styles.basket}>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{totalItems}</Text>
        </View>
        <FontAwesomeIcon
          style={styles.basketIcon}
          size={40}
          icon={faShoppingCart}
        />
        <Text style={styles.price}> £ {parseFloat(totalPrice).toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BasketIndicator;

const styles = StyleSheet.create({
  basket: {
    borderWidth: 0.5,
    flexDirection: 'row',

    height: 60,
    width: '100%',
    borderColor: 'black',
    alignItems: 'center',
    borderColor: 'black',

    borderColor: 'black',
    justifyContent: 'flex-start',
    backgroundColor: 'mediumseagreen',
  },

  basketIcon: {
    marginLeft: 20,
    color: 'whitesmoke',
  },
  counter: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: 'whitesmoke',
    borderWidth: 0.7,
    borderColor: 'whitesmoke',
    top: 5,
    left: 5,
    zIndex: 2,
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  counterText: {alignSelf: 'center', fontSize: 24},
  price: {fontSize: 18},
});
