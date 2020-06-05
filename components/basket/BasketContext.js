import React, {createContext, useState} from 'react';
import {View, Text} from 'react-native';

export const BasketContext = createContext({});

export const BasketProvider = props => {
  const [items, setItems] = useState([]);
  const addFoodItem = foodItem => {
    // for (let i = 0; i < items.length; i++) {
    //   r;
    //   if (foodItem.id === items[i].id) {
    //     setItems(prevState => {
    //       prevState[i].qty++;
    //       return prevState;
    //     });
    //     console.log(items);
    //     return;
    //   }
    // }
    setItems([...items, {...foodItem, qty: 1}]);
  };
  return (
    <BasketContext.Provider value={{items: items, addFoodItem}}>
      {props.children}
    </BasketContext.Provider>
  );
};
