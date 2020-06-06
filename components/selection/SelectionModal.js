import React, {useContext} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {BasketContext} from '../basket/BasketContext';
import {Navigation} from 'react-native-navigation';

const SelectionModal = ({item, addItem}) => {
  console.log(item);
  const handlePress = () => {
    const [options, setOptions] = useState([]);

    addItem(item);
    Navigation.dismissAllModals({
      animations: {
        dismissModal: {
          enable: false,
        },
      },
    });
  };
  return (
    <View style={styles.wrapper}>
      {item.food_item_options.map(option => {
        return (
          <View>
            <Text>{option.title}</Text>
            <Text>{option.description}</Text>
            <Text>
              {option.additional_charge > 0 &&
                `£ ${parseFloat(option.additional_charge).toFixed(2)} extra`}
            </Text>
          </View>
        );
      })}
      <Button title="ok" />
    </View>
  );
};

export default SelectionModal;

const styles = StyleSheet.create({
  wrapper: {backgroundColor: 'white', width: '100%', height: '100%'},
});
