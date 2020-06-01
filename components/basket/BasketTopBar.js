import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import {BasketContext} from './BasketContext';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const BasketTopBar = () => {
  const context = useContext(BasketContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thali</Text>
      <TouchableOpacity style={styles.basket}>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{context.items}</Text>
        </View>
        <FontAwesomeIcon
          style={styles.basketIcon}
          size={40}
          icon={faShoppingCart}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BasketTopBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,

    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'black',
  },
  basket: {
    borderWidth: 0.5,

    borderColor: 'whitesmoke',
    height: '100%',
    width: '20%',
    justifyContent: 'center',
    backgroundColor: 'mediumseagreen',
  },
  title: {marginLeft: 5, fontSize: 30},
  basketIcon: {
    alignSelf: 'center',
    color: 'whitesmoke',
  },
  counter: {
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: 'whitesmoke',
    borderWidth: 0.7,
    borderColor: 'whitesmoke',
    top: 20,
    left: 10,
    zIndex: 2,
    height: 25,
    width: 25,
    borderRadius: 25 / 2,
  },
  counterText: {alignSelf: 'center', fontSize: 24},
});
