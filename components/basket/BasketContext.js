import React, {createContext} from 'react';
import {View, Text} from 'react-native';

const BasketContext = createContext({foodItems:[],dealItems:[],updateItems:})
const updateItems = ()=>{
     const ctx = useContext(BasketContext)
}
export default BasketContext;
