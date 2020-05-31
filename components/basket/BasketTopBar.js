import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BasketTopBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thali</Text>
      <Text style={styles.basket}>basket</Text>
    </View>
  );
};

export default BasketTopBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,

    alignItems: 'center',
    justifyContent: 'space-between',
  },
  basket: {marginRight: 10},
  title: {marginLeft: 5, fontSize: 32},
});
