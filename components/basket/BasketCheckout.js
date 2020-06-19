import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {BasketContext} from './BasketContext';

const BasketCheckout = ({dealItems, items}) => {
  //   const {dealItems, items} = useContext(BasketContext);
  return (
    <View style={{backgroundColor: 'red', width: '100%', height: '100%'}}>
      <Text>{JSON.stringify({dealItems, items})}</Text>
    </View>
  );
};

export default BasketCheckout;
