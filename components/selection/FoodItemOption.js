import React, {useState} from 'react';
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
  max_permitted,
  qty,
  totalQuantity,
}) => {
  const [selected, setSelected] = useState(false);
  const handleSelect = (
    option,
    max,
    totalQuantity,
    maxPermitted,
    currentQty,
  ) => {
    console.log(`name ==> ${option.title} 
    current qty =>> ${currentQty}
    max permitted ==> ${maxPermitted}`);
    if (totalQuantity < max && currentQty < (maxPermitted || 1)) {
      addOption(option);
      setSelected(true);
    }
  };
  const handleRemove = id => {
    removeOption({id});
    setSelected(false);
  };
  return (
    <View
      style={
        selected ? {...styles.container, ...styles.selected} : styles.container
      }>
      <TouchableHighlight
        style={styles.optionButton}
        onPress={() => {
          handleSelect(
            {id, title, additional_charge},
            food_item_options_maximum_selection,
            totalQuantity,
            max_permitted,
            qty,
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
                : ''}
            </Text>
          </View>
        </View>
      </TouchableHighlight>

      {selected && (
        <TouchableHighlight
          onPress={() => {
            handleRemove(id);
          }}
          style={styles.removeOption}>
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
