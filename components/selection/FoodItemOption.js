import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
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
    <View
      style={
        qty > 0 ? {...styles.container, ...styles.selected} : styles.container
      }>
      <TouchableHighlight
        style={styles.optionButton}
        onPress={() => {
          handlePress(
            {id, title, additional_charge},
            food_item_options_maximum_selection,
            totalQuantity,
          );
        }}>
        <View style={styles.optionContainer}>
          <View style={styles.titleDescriptionContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
          <View
            style={
              qty != 0
                ? styles.additionalCharge
                : {...styles.additionalCharge, marginRight: 50}
            }>
            <Text>
              {additional_charge > 0
                ? `£ ${parseFloat(additional_charge).toFixed(2)}`
                : 'FREE'}
            </Text>
          </View>
        </View>
      </TouchableHighlight>

      {qty > 0 && (
        <TouchableHighlight style={styles.removeOption}>
          <View>
            <FontAwesomeIcon
              style={styles.removeOptionIcon}
              icon={faTimes}
              size={32}
            />
          </View>
        </TouchableHighlight>
      )}
    </View>
  );
};

export default FoodItemOption;

const styles = StyleSheet.create({
  selected: {
    backgroundColor: 'mediumseagreen',
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'whitesmoke',
    opacity: 0.9,
  },
  optionButton: {flexGrow: 1},

  optionContainer: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: 'silver',
  },
  title: {fontSize: 20},
  description: {fontSize: 16},
  titleDescriptionContainer: {padding: 10, marginLeft: 5},
  additionalCharge: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  addOption: {
    justifyContent: 'space-around',
    flexDirection: 'column',
    marginRight: '5%',

    alignItems: 'center',
  },
  removeOption: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeOptionIcon: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: 'goldenrod',
    elevation: 5,
  },
});
