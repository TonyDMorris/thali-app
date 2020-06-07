import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

const FoodItemOption = ({
  id,
  title,
  description,
  additional_charge,
  addOption,
  removeOption,
  food_item_options_maximum_selection,
  qty,
  totalQuantity,
}) => {
  const handlePress = (option, max, totalQuantity) => {
    console.log(max, totalQuantity);
    if (totalQuantity < max) {
      addOption(option);
    }
  };
  return (
    <TouchableHighlight
      onPress={() => {
        handlePress(
          {id, title, additional_charge},
          food_item_options_maximum_selection,
          totalQuantity,
        );
      }}>
      <View
        style={qty > 0 ? {...styles.view, ...styles.selected} : styles.view}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <Text>
          {additional_charge > 0 &&
            `£ ${parseFloat(additional_charge).toFixed(2)} extra`}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default FoodItemOption;

const styles = StyleSheet.create({
  selected: {backgroundColor: 'mediumseagreen'},
  view: {
    opacity: 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'whitesmoke',
    padding: 5,
    borderWidth: 0.5,
    borderBottomColor: 'silver',
  },
  title: {marginTop: 5, marginBottom: 10, fontSize: 18},
  description: {
    alignSelf: 'flex-start',
    width: '70%',

    marginLeft: 10,
  },
  additionalCharge: {},
  addOption: {
    justifyContent: 'space-around',
    flexDirection: 'column',
    marginRight: '5%',

    alignItems: 'center',
  },
});
