import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import MenuDealOption from './MenuDealOption';

const MenuDealOptions = ({foodItem}) => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../../assets/images/Mumbai_Dabbawala_or_Tiffin_Wallahs-_200,000_Tiffin_Boxes_Delivered_Per_Day.jpg')}>
      <View style={styles.scrollView}>
        <ScrollView>
          {menu_deal_options.map(opt => {
            arr = [...new Array(opt.number_of_selections)];
            return arr.map((nil, i) => {
              console.log(opt.number_of_selections);
              return (
                <MenuDealOption
                  key={`${opt.id}${i}`}
                  name={`${opt.selection_text} ${i + 1}`}
                  foodItems={opt.food_items}
                />
              );
            });
          })}
        </ScrollView>
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
