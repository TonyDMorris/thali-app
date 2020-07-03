import React, {createContext, useState} from 'react';

const isNotduplicate = (original, additional) => {
  console.log(`original === > ${original}
 additional ===> ${additional}`);
  const newFoodItemOptions = original.food_item_options.sort((curr, next) => {
    return curr.id - next.id;
  });
  const oldFoodItemOptions = additional.food_item_options.sort((curr, next) => {
    return curr.id - next.id;
  });
  const longest =
    newFoodItemOptions.length > oldFoodItemOptions.length
      ? newFoodItemOptions
      : oldFoodItemOptions;
  const shortest =
    newFoodItemOptions.length > oldFoodItemOptions.length
      ? oldFoodItemOptions
      : newFoodItemOptions;
  const isNotduplicate = longest.some((option, i) => {
    return option.id != shortest[i].id;
  });
  return isNotduplicate;
};
export const handleFoodItems = (foodItem, items, ctxFunc) => {
  for (let i = 0; i < items.length; i++) {
    if (foodItem.id === items[i].id) {
      if (isNotduplicate(items[i], foodItem)) {
        console.log('here');
        ctxFunc([...items, {...foodItem, qty: 1}]);

        return;
      } else {
        ctxFunc(prevItems => {
          return [
            ...prevItems.slice(0, i),
            ...prevItems.slice(i + 1),
            {...prevItems[i], qty: items[i].qty + 1},
          ];
        });

        return;
      }
    }
  }

  ctxFunc([...items, {...foodItem, qty: 1}]);
};

export const handleDealItems = (dealItem, dealItems, ctxFunc) => {
  ctxFunc(prevOptions => {
    prevOptions.push(dealItem);
    return [...prevOptions];
  });
};

export const BasketContext = createContext({});
export const BasketProvider = props => {
  const [items, setItems] = useState([]);
  const [dealItems, setDealItems] = useState([]);

  const addItem = foodItem => {
    handleFoodItems(foodItem, items, setItems);
  };

  const addDealItem = dealItem => {
    handleDealItems(dealItem, dealItems, setDealItems);
  };
  return (
    <BasketContext.Provider
      value={{dealItems: dealItems, items: items, addItem, addDealItem}}>
      {props.children}
    </BasketContext.Provider>
  );
};
