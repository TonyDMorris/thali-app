import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {BasketContext} from '../basket/BasketContext';

const AddItem = props => {
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
    food_item_options,
  } = props);

  const handlePress = () => {};

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <FontAwesomeIcon icon={faPlus} size={30} />
    </TouchableOpacity>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: 'goldenrod',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
