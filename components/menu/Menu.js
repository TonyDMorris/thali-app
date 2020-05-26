import React, {useState} from 'react';
import Category from './Category';

const Menu = ({categories}) => {
  const [isCollapsed, setCollapse] = useState(false);
  return categories.map(cat => {
    return <Category key={cat.id} {...cat} />;
  });
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
