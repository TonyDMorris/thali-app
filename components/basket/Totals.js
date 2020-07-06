import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Totals = ({styles, subtotal, delivery, total}) => {
  return (
    <View style={styles.totals}>
      <View style={styles.total}>
        <Text>Subtotal</Text>
        <Text>{`£ ${parseFloat(total).toFixed(2)}`}</Text>
      </View>
      <View style={styles.total}>
        <Text>Delivery</Text>
        <Text>{`£ ${parseFloat(delivery).toFixed(2)}`}</Text>
      </View>
      <View style={styles.total}>
        <Text>Total</Text>
        <Text>{`£ ${parseFloat(total + delivery).toFixed(2)}`}</Text>
      </View>
    </View>
  );
};

export default Totals;

const styles = StyleSheet.create({});
