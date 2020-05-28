import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FoodItem from './FoodItem';

const DealItem = ({name, description, price, menu_deal_options}) => {
  return (
    <>
      <FoodItem name={name} description={description} price={price} />
      {menu_deal_options.map(menuDealOption => {
        return menuDealOption.food_items.map(foodItem => {
          return <FoodItem key={foodItem.id} {...foodItem} isDeal={true} />;
        });
      })}
    </>
  );
};

export default DealItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    backgroundColor: 'whitesmoke',
    borderTopColor: 'silver',
    borderWidth: 1,
  },
  infoContainer: {
    alignSelf: 'flex-start',
    width: '70%',

    marginLeft: 10,
  },
  title: {
    marginTop: 5,
    marginBottom: 10,
    fontSize: 18,
  },
  description: {marginBottom: 10},
  price: {fontSize: 14},
  numericInput: {alignSelf: 'center', marginRight: 5},
});
