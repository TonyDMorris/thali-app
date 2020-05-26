import React, {useState} from 'react';
import {Button} from 'react-native';
import Collapsible from 'react-native-collapsible';
import {StyleSheet, Text, View} from 'react-native';

const Category = () => {
  const [isCollapsed, setCollapse] = useState(true);
  return (
    <>
      <Button
        title="open/close"
        onPress={() => {
          setCollapse(!isCollapsed);
        }}
      />
      <Collapsible collapsed={isCollapsed}>
        <View>
          <Text>this is the menu screen</Text>
        </View>
      </Collapsible>
    </>
  );
};

export default Category;

const styles = StyleSheet.create({});
