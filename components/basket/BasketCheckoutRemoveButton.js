import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMinus} from '@fortawesome/free-solid-svg-icons';
const BasketCheckoutRemoveButton = ({removeItem, index}) => {
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={() => {
        removeItem(index);
      }}>
      <View>
        <FontAwesomeIcon size={18} icon={faMinus} />
      </View>
    </TouchableHighlight>
  );
};

export default BasketCheckoutRemoveButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
    padding: 2,
    height: 20,
    width: 20,
  },
});
