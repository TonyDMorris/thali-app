import React, {useState, useEffect, useContext} from 'react';
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
} from 'react-native';
import Totals from './Totals';
import BasketInventoryItem from './BasketInventoryItem';
import BasketInventoryDealItem from './BasketInventoryDealItem';
import BasketCheckoutRemoveButton from './BasketCheckoutRemoveButton';
import {Navigation} from 'react-native-navigation';
import {BasketContext} from './BasketContext';
import {handleRemoveItem} from '../basket/BasketContext';

const BasketCheckout = ({dealItems, items, removeItem}) => {
  const [receiptDealItems, setReceiptDeals] = useState([]);
  const [receiptItems, setReceiptItems] = useState([]);

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

  const dealTotals = getTotalPriceAndQuantitiy(receiptDealItems);
  const foodItemTotals = getTotalPriceAndQuantitiy(receiptItems);
  const totalPrice = dealTotals.totalPrice + foodItemTotals.totalPrice;

  useEffect(() => {
    setReceiptDeals(dealItems);
    setReceiptItems(items);
  }, []);

  const [order, setOrder] = useState({});

  useEffect(() => {
    setOrder({totalPrice: totalPrice, dealItems, items});
  }, []);

  const navigate = () => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: 'com.myApp.CheckoutAddressEntry',
              passProps: {
                order,
              },
              options: {
                modalPresentationStyle: 'overCurrentContext',
              },
            },
          },
        ],
      },
    });
  };

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
          {receiptDealItems.map((item, index) => {
            return (
              <View style={styles.infoAndRemoveGroup}>
                <BasketInventoryDealItem
                  key={`${item.id}${index}deal`}
                  {...item}
                />
                <BasketCheckoutRemoveButton
                  index={index}
                  removeItem={index => {
                    removeItem(index, 'deal');
                    handleRemoveItem(index, setReceiptDeals);
                  }}
                />
              </View>
            );
          })}
          {receiptItems.map((item, index) => {
            return (
              <View style={styles.infoAndRemoveGroup}>
                <BasketInventoryItem key={`${item.id}${index}food`} {...item} />
                <BasketCheckoutRemoveButton
                  index={index}
                  removeItem={index => {
                    removeItem(index, 'item');
                    handleRemoveItem(index, setReceiptItems);
                  }}
                />
              </View>
            );
          })}
        </ScrollView>
        <Totals
          styles={{total: styles.total, totals: styles.totals}}
          subTotal={totalPrice}
          total={totalPrice}
          delivery={0}
        />
        <View style={styles.orderButton}>
          <Button
            onPress={navigate}
            color="#0398aa"
            raised={true}
            title="Checkout"
          />
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
  infoAndRemoveGroup: {
    flexDirection: 'row',
    marginBottom: 5,
  },
});
BasketCheckout.options = {
  topBar: {
    title: {text: 'Checkout', alignment: 'center'},
  },
};
export default BasketCheckout;
