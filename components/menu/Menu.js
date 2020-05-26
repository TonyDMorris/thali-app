import React, {useState} from 'react';
import Category from './Category';

const Menu = ({categories, deals}) => {
  const [isCollapsed, setCollapse] = useState(false);
  return categories.map(cat => {
    return <Category key={cat.id} />;
  });
};

export default Menu;
