import React from 'react';

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
