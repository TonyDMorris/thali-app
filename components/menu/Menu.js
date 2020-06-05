import React, {useState} from 'react';
import Category from './Category';
import {BasketProvider} from '../basket/BasketContext';
import {ScrollView} from 'react-native';

const Menu = ({categories}) => {
  return (
    <ScrollView>
      {categories.map(cat => {
        return <Category key={cat.id} {...cat} />;
      })}
    </ScrollView>
  );
};

Menu.options = {
  topBar: {
    title: {
      component: {
        name: 'com.myApp.BasketTopBar',
        alignment: 'center',
      },
    },
  },
};

export default Menu;
