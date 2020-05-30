import React, {createContext, useState} from 'react';
import {View, Text} from 'react-native';

export const BasketContext = createContext({});

export const BasketPriovder = props => {
  const [items, setItems] = useState({});
  return (
    <BasketContext.Provider value={{items, setItems}}>
      {props.children}
    </BasketContext.Provider>
  );
};
