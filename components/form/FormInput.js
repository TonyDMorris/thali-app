import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
const FormInput = ({styles, onChangeText, value, placeholder, icon, error}) => {
  return (
    <>
      <View style={styles}>
        {icon && <FontAwesomeIcon icon={icon} color="grey" />}
        <TextInput
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
        />
      </View>
      {error && <Text style={errorStyles.error}>{error}</Text>}
    </>
  );
};
const errorStyles = StyleSheet.create({error: {color: 'red', marginLeft: 10}});
export default FormInput;
