import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const BasketInventoryItem = ({qty, name, food_item_options, price}) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameAndPrice}>
        <Text style={styles.name}>{name}</Text>

        <Text>{`${qty} x     £ ${parseFloat(price).toFixed(2)}`}</Text>
      </View>
      <View style={styles.options}>
        {food_item_options &&
          food_item_options.map(option => {
            return (
              <Text key={option.id}>{`- ${option.title}        ${
                option.qty > 1 ? option.qty : ''
              }`}</Text>
            );
          })}
      </View>
    </View>
  );
};

export default BasketInventoryItem;

const styles = StyleSheet.create({
  container: {flexGrow: 1, marginRight: 15},
  nameAndPrice: {justifyContent: 'space-between', flexDirection: 'row'},
  name: {maxWidth: '50%'},
  options: {marginLeft: 20},
});
