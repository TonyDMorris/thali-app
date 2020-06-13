import React, {useState} from 'react';
import MenuDealOptionSet from './MenuDealOptionSet';
import {handleFoodItems} from '../basket/BasketContext';
const MenuDealOption = ({
  dealOptionIndex,
  title,
  number_of_selections,
  food_items,
  setDeal,
}) => {
  const [options, setOptions] = useState([]);
  const addOption = (item, index) => {
    setOptions(prevOptions => {
      const newOptions = [
        ...prevOptions.filter(oldItem => {
          return oldItem.index != index;
        }),
        {index, ...item},
      ];
      setDeal({title, options: newOptions}, dealOptionIndex);
      return newOptions;
    });
  };
  return [...new Array(number_of_selections)].map((nil, i) => {
    return (
      <MenuDealOptionSet
        addOption={addOption}
        key={i}
        food_items={food_items}
        title={title}
        number_of_selections={number_of_selections}
        index={i + 1}
      />
    );
  });
};

export default MenuDealOption;
