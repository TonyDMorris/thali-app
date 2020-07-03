import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BasketInventoryDealFoodItem from './BasketInventoryDealFoodItem';

const BasketInventoryDealItem = ({name, menu_deal_options, price, qty}) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameAndPrice}>
        <Text style={styles.name}>{name}</Text>

        <Text>{`${qty} x     £ ${parseFloat(price).toFixed(2)}`}</Text>
      </View>
      <View style={styles.options}>
        {menu_deal_options.map(({options}) => {
          return options.map((foodItem, index) => {
            return (
              <BasketInventoryDealFoodItem
                key={`${foodItem.id}${index}`}
                {...foodItem}
              />
            );
          });
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {width: '100%'},
  nameAndPrice: {justifyContent: 'space-between', flexDirection: 'row'},
  name: {maxWidth: '50%'},
  options: {marginLeft: 20},
});
export default BasketInventoryDealItem;
