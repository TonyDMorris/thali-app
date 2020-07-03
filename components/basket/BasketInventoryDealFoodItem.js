import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BasketInventoryDealFoodItem = ({qty, name, food_item_options, price}) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameAndPrice}>
        <Text style={styles.name}>- {name}</Text>
      </View>
      <View style={styles.options}>
        {food_item_options &&
          food_item_options.map((option, index) => {
            return (
              <Text key={`${option.id}${index}`}>{`- ${option.title}        ${
                option.qty > 1 ? option.qty : ''
              }`}</Text>
            );
          })}
      </View>
    </View>
  );
};

export default BasketInventoryDealFoodItem;

const styles = StyleSheet.create({
  container: {width: '100%'},
  nameAndPrice: {justifyContent: 'space-between', flexDirection: 'row'},
  name: {maxWidth: '50%'},
  options: {marginLeft: 20},
});
