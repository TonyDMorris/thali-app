import React, {createContext, useState} from 'react';
import {View, Text} from 'react-native';

export const BasketContext = createContext({});

export const BasketProvider = props => {
  const [items, setItems] = useState([]);
  const addItem = foodItem => {
    for (let i = 0; i < items.length; i++) {
      if (foodItem.id === items[i].id) {
        setItems(prevItems => {
          return [
            ...prevItems.slice(0, i),
            ...prevItems.slice(i + 1),
            {...prevItems[i], qty: items[i].qty + 1},
          ];
        });

        return;
      }
    }
    console.log(foodItem);
    setItems([...items, {...foodItem, qty: 1}]);
  };
  return (
    <BasketContext.Provider value={{items: items, addItem}}>
      {props.children}
    </BasketContext.Provider>
  );
};
