import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Button,
} from 'react-native';

const MenuDealOptions = ({foodItem}) => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../../assets/images/Mumbai_Dabbawala_or_Tiffin_Wallahs-_200,000_Tiffin_Boxes_Delivered_Per_Day.jpg')}>
      <View style={styles.scrollView}>
        <ScrollView />
        <Button title="ok" />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  scrollView: {height: '100%'},
});

export default MenuDealOptions;
