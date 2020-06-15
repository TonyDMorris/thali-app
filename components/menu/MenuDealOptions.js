import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Button,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {BasketContext} from '../basket/BasketContext';
import MenuDealOption from './MenuDealOption';

const MenuDealOptions = ({foodItem, addDealItem}) => {
  const [selections, setSelections] = useState({});

  const setDeal = (options, index) => {
    setSelections(prevSelections => {
      prevSelections[index] = options;
      console.log(prevSelections);
      return {...prevSelections};
    });
  };

  const handleDismissModal = dealItem => {
    addDealItem(dealItem);
    Navigation.dismissAllModals({
      animations: {
        dismissModal: {
          enable: false,
        },
      },
    });
  };
  const isValidSelection = (selections, foodItem) => {
    for (let i = 0; i < foodItem.menu_deal_options.length; i++) {
      if (
        !selections[i] ||
        selections[i].options.length !==
          foodItem.menu_deal_options[i].number_of_selections
      ) {
        return false;
      }
    }
    return true;
  };
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../../assets/images/Mumbai_Dabbawala_or_Tiffin_Wallahs-_200,000_Tiffin_Boxes_Delivered_Per_Day.jpg')}>
      <View style={styles.scrollView}>
        <ScrollView>
          {foodItem.menu_deal_options.map((opt, index) => {
            return (
              <MenuDealOption
                dealOptionIndex={index}
                key={opt.id}
                title={opt.selection_text}
                number_of_selections={opt.number_of_selections}
                food_items={opt.food_items}
                setDeal={setDeal}
              />
            );
          })}
        </ScrollView>
        <Button
          onPress={() => {
            handleDismissModal({
              ...foodItem,
              menu_deal_options: selections,
              qty: 1,
            });
          }}
          disabled={
            selections && isValidSelection(selections, foodItem) ? false : true
          }
          title="ok"
        />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  scrollView: {height: '100%'},
});

export default MenuDealOptions;
