import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Button,
} from 'react-native';
import MenuDealOption from './MenuDealOption';
import {handleFoodItems} from '../basket/BasketContext';
const MenuDealOptions = ({foodItem}) => {
  const [options, setOptions] = useState([]);
  const handleDealOption = option => {
    handleFoodItems(option, options, setOptions);
  };

  const totalQuantity = options.reduce((acc, curr) => {
    acc += curr.qty;
    return acc;
  }, 0);
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../../assets/images/Mumbai_Dabbawala_or_Tiffin_Wallahs-_200,000_Tiffin_Boxes_Delivered_Per_Day.jpg')}>
      <View style={styles.scrollView}>
        <ScrollView>
          {foodItem.menu_deal_options.map(opt => {
            arr = [...new Array(opt.number_of_selections)];
            return arr.map((nil, i) => {
              return (
                <MenuDealOption
                  totalQuantity={totalQuantity}
                  handleDealOption={handleDealOption}
                  key={`${opt.id}${i}`}
                  name={`${opt.selection_text} ${i + 1}`}
                  foodItems={opt.food_items}
                  options={options}
                />
              );
            });
          })}
        </ScrollView>
        <Button title="ok" />
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
