import React from 'react';

import FoodItem from './FoodItem';

const DealItem = props => {
  return (
    <>
      <FoodItem {...props} hasDealOptions />
      {props.menu_deal_options.map(menuDealOption => {
        return menuDealOption.food_items.map(foodItem => {
          return <FoodItem key={foodItem.id} {...foodItem} isDeal={true} />;
        });
      })}
    </>
  );
};

export default DealItem;
