import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AddItem from './AddItem';

const FoodItem = ({
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
}) => {
  return (
    <View
      style={
        isDeal ? {...styles.container} : {...styles.container, ...styles.border}
      }>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>
          {name}
          <Text style={styles.price}> {!isDeal ? price : ''}</Text>
        </Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.addItem}>{!isDeal && <AddItem />}</View>
    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({
  border: {borderTopColor: 'silver', borderTopWidth: 1},
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'whitesmoke',
  },
  infoContainer: {
    alignSelf: 'flex-start',
    width: '70%',

    marginLeft: 10,
  },
  title: {
    marginTop: 5,
    marginBottom: 10,
    fontSize: 18,
  },
  description: {marginBottom: 10},
  price: {fontSize: 14},
  addItem: {alignSelf: 'center', marginRight: '5%'},
});
