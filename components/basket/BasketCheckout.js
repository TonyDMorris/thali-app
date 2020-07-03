import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
  Platform,
  Button,
  TouchableHighlight,
} from 'react-native';
import BasketInventoryItem from './BasketInventoryItem';
import BasketInventoryDealItem from './BasketInventoryDealItem';

const BasketCheckout = ({dealItems, items}) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/images/28698966_1731815253550042_6718612512129699139_o.jpg')}>
      <View style={styles.topLogo}>
        <Image
          source={require('../../assets/images/53219015_2217301215001441_9170682825471426560_n.jpg')}
          style={styles.topLogoImage}
        />
      </View>

      <View style={styles.content}>
        <ScrollView style={styles.order}>
          <View style={styles.orderTextBox}>
            <Text style={styles.orderText}>{`Your order from \n Thali`}</Text>
          </View>
          {dealItems.map((item, index) => {
            return (
              <BasketInventoryDealItem
                key={`${item.id}${index}deal`}
                {...item}
              />
            );
          })}
          {items.map((item, index) => {
            return (
              <BasketInventoryItem key={`${item.id}${index}food`} {...item} />
            );
          })}
        </ScrollView>
        <View style={styles.totals}>
          <View style={styles.total}>
            <Text>Subtotal</Text>
            <Text>£0.00</Text>
          </View>
          <View style={styles.total}>
            <Text>Delivery</Text>
            <Text>£0.00</Text>
          </View>
          <View style={styles.total}>
            <Text>Total</Text>
            <Text>£0.00</Text>
          </View>
        </View>
        <View style={styles.orderButton}>
          <Button color="#0398aa" raised={true} title="Checkout" />
        </View>
      </View>
    </ImageBackground>
  );
};
styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  topLogo: {backgroundColor: '#0398aa', height: 100, zIndex: 1},
  topLogoImage: {
    width: Dimensions.get('window').width - 250,
    height: Dimensions.get('window').width - 250,
    backgroundColor: '#f4f4f4',
    borderRadius: (Dimensions.get('window').width - 250) / 2,
    alignSelf: 'center',

    borderWidth: 7,
    borderColor: 'whitesmoke',
    marginBottom: 100,
    marginTop: 10,
  },
  content: {
    backgroundColor: 'rgba(232, 232, 232, 0.9)',
    flexGrow: 1,
    padding: 10,
  },
  orderTextBox: {
    alignSelf: 'center',
    marginTop: 70,
    textAlign: 'center',
    alignSelf: 'stretch',
  },
  orderText: {
    textAlign: 'center',
    fontSize: 14,
    borderBottomWidth: 0.5,
    borderColor: 'silver',
    marginBottom: 5,
    padding: 5,
  },
  order: {
    paddingLeft: '5%',
    paddingRight: '5%',
    height: 100,
    width: '100%',
    alignSelf: 'center',
    borderBottomWidth: 0.5,
    borderColor: 'silver',
    marginBottom: 5,
  },
  totals: {
    width: '90%',
    borderRadius: 5,
    backgroundColor: 'rgba(189, 195, 199, 1)',
    alignSelf: 'center',
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
  total: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 7,
  },
  orderButton: {
    marginTop: 20,
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
  },
});

export default BasketCheckout;
