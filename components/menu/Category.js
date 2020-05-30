import React, {useState, useContext} from 'react';
import {Button} from 'react-native';
import Collapsible from 'react-native-collapsible';
import FoodItem from './FoodItem';
import DealItem from './DealItem';
import {StyleSheet, Text, View} from 'react-native';
import {BasketContext} from '../basket/BasketContext';

const Category = ({name, food_items, menu_deals}) => {
  const [isCollapsed, setCollapse] = useState(true);
  const context = useContext(BasketContext);

  return (
    <>
      <Button
        title={`${name}`}
        onPress={() => {
          console.log(context);
          setCollapse(!isCollapsed);
        }}
      />
      <Collapsible collapsed={isCollapsed}>
        {menu_deals.map(deal => {
          return <DealItem key={deal.id} {...deal} />;
        })}
        {food_items.map(fi => {
          return <FoodItem key={fi.id} {...fi} />;
        })}
      </Collapsible>
    </>
  );
};

export default Category;

const styles = StyleSheet.create({});
