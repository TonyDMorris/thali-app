import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, Button, ImageBackground} from 'react-native';
import {BasketContext} from '../basket/BasketContext';
import {Navigation} from 'react-native-navigation';
import FoodItemOption from './FoodItemOption';

const FoodItemOptionsSelectionModal = ({foodItem, addItem, componentId}) => {
  const [options, setOptions] = useState([]);
  const totalQuantity = options.reduce((acc, curr) => {
    acc += curr.qty;
    return acc;
  }, 0);
  const addOption = option => {
    for (let i = 0; i < options.length; i++) {
      if (option.id === options[i].id) {
        setOptions(prevItems => {
          return [
            ...prevItems.slice(0, i),
            ...prevItems.slice(i + 1),
            {...prevItems[i], qty: options[i].qty + 1},
          ];
        });

        return;
      }
    }

    setOptions([...options, {...option, qty: 1}]);
  };

  const removeOption = option => {
    for (let i = 0; i < options.length; i++) {
      if (option.id === options[i].id) {
        setOptions(prevItems => {
          return [...prevItems.slice(0, i), ...prevItems.slice(i + 1)];
        });
      }
    }
  };
  const handleDismissModal = opts => {
    addItem({...foodItem, food_item_options: opts});

    Navigation.dismissModal(componentId);
  };
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../../assets/images/51095796_2175438532521043_6085140477068181504_o.jpg')}>
      <View style={styles.wrapper}>
        {foodItem.food_item_options.map(option => {
          qty = options.reduce((acc, curr) => {
            if (curr.id === option.id) {
              return curr.qty;
            } else {
              return acc;
            }
          }, 0);
          return (
            <FoodItemOption
              key={option.id}
              {...option}
              qty={qty}
              food_item_options_maximum_selection={
                foodItem.food_item_options_maximum_selection
              }
              totalQuantity={totalQuantity}
              addOption={addOption}
              removeOption={removeOption}
            />
          );
        })}

        <Button
          disabled={
            totalQuantity >= foodItem.food_item_options_minimum_selection &&
            totalQuantity <= foodItem.food_item_options_maximum_selection
              ? false
              : true
          }
          title="ok"
          onPress={() => {
            handleDismissModal(options);
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default FoodItemOptionsSelectionModal;

const styles = StyleSheet.create({
  wrapper: {},
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
