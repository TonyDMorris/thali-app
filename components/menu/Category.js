import React, {useState} from 'react';
import {Button} from 'react-native';
import Collapsible from 'react-native-collapsible';
import FoodItem from './FoodItem';
import {StyleSheet, Text, View} from 'react-native';

const Category = ({name, food_items}) => {
  const [isCollapsed, setCollapse] = useState(true);
  return (
    <>
      <Button
        title={`${name}`}
        onPress={() => {
          setCollapse(!isCollapsed);
        }}
      />
      <Collapsible collapsed={isCollapsed}>
        {food_items.map(fi => {
          return <FoodItem key={fi.id} {...fi} />;
        })}
      </Collapsible>
    </>
  );
};

export default Category;

const styles = StyleSheet.create({});
