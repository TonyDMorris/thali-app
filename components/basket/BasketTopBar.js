import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
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
          <Text style={styles.counterText}>{context.items.length}</Text>
        </View>
        <FontAwesomeIcon
          style={styles.basketIcon}
          size={32}
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

    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'black',
  },
  basket: {
    borderWidth: 0.5,

    borderColor: 'black',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 1,
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
    top: 5,
    left: 5,
    zIndex: 2,
    height: 25,
    width: 25,
    borderRadius: 25 / 2,
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
});
