import React, {useState} from 'react';
import Category from './Category';
import {BasketPriovder} from '../basket/BasketContext';

const Menu = ({categories}) => {
  const [isCollapsed, setCollapse] = useState(false);
  return (
    <BasketPriovder>
      {categories.map(cat => {
        return <Category key={cat.id} {...cat} />;
      })}
    </BasketPriovder>
  );
};

Menu.options = {
  topBar: {
    title: {
      text: 'Menu',
      alignment: 'center',
    },
  },
};

export default Menu;
