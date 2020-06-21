import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {BasketContext} from '../basket/BasketContext';
import {Navigation} from 'react-native-navigation';

const AddItem = props => {
  const context = useContext(BasketContext);
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
    food_item_options_minimum_selection,
    food_item_options_maximum_selection,
    menu_deal_options,
    hasDealOptions,
  } = props);

  const selectionNumberString = (min, max) => {
    if (min === max) {
      return `Select ${min} option${min > 1 ? 's' : ''}`;
    } else {
      `Select between ${min} and ${max} options`;
    }
  };
  const handlePress = foodItem => {
    if (foodItem.hasDealOptions) {
      Navigation.showModal({
        stack: {
          children: [
            {
              component: {
                name: 'com.myApp.MenuDealOptions',
                passProps: {
                  foodItem: foodItem,
                  addDealItem: context.addDealItem,
                },
                options: {
                  modalPresentationStyle: 'overCurrentContext',
                  topBar: {
                    title: {
                      text: foodItem.name,
                    },
                  },
                },
              },
            },
          ],
        },
      });
    } else if (
      foodItem.food_item_options &&
      foodItem.food_item_options.length > 0
    ) {
      Navigation.showModal({
        stack: {
          children: [
            {
              component: {
                name: 'com.myApp.FoodItemOptionsSelectionModal',
                passProps: {
                  foodItem: foodItem,
                  addItem: context.addItem,
                },
                options: {
                  modalPresentationStyle: 'overCurrentContext',
                  topBar: {
                    title: {
                      text: selectionNumberString(
                        foodItem.food_item_options_minimum_selection,
                        foodItem.food_item_options_maximum_selection,
                      ),
                    },
                  },
                },
              },
            },
          ],
        },
      });
    } else {
      context.addItem(foodItem);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        handlePress(foodItem);
      }}
      style={styles.container}>
      <FontAwesomeIcon icon={faPlus} size={30} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: 'mediumseagreen',
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

export default AddItem;
