import React, {createContext, useState} from 'react';
import {View, Text} from 'react-native';

export const BasketContext = createContext({});

export const BasketProvider = props => {
  const [items, setItems] = useState([]);

  return (
    <BasketContext.Provider value={{items: items.length, setItems}}>
      {props.children}
    </BasketContext.Provider>
  );
};
