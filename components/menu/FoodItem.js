import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AddItem from './AddItem';

const FoodItem = props => {
  const foodItem = ({
    name,
    description,
    price,
    id,
    vegan,
    vegetarian,
    gluten_free,
    dairy_free,
    vegan_option,
    isDeal,
    food_item_options,
    food_item_options_minimum_selection,
    food_item_options_maximum_selection,
    hasDealOptions,
  } = props);

  return (
    <View
      style={
        isDeal ? {...styles.container} : {...styles.container, ...styles.border}
      }>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.addItem}>
        {!isDeal && <AddItem {...foodItem} />}
        <Text style={styles.price}>
          {!isDeal ? `£ ${parseFloat(price).toFixed(2)}` : ''}
        </Text>
      </View>
    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({
  border: {borderTopWidth: 1},
  container: {
    opacity: 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'whitesmoke',
    padding: 5,
  },
  infoContainer: {
    alignSelf: 'flex-start',
    width: '70%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 10,
    padding: 10,
  },
  title: {
    fontSize: 18,
    paddingBottom: 5,
  },
  description: {paddingBottom: 5},
  price: {fontSize: 14},
  addItem: {
    justifyContent: 'space-around',
    flexDirection: 'column',
    marginRight: '5%',

    alignItems: 'center',
  },
});
