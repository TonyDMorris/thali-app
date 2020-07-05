import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';

const CheckoutAddressEntry = ({order}) => {
  const [houseNumber, setHouseNumber] = useState('');
  const [address, setAddress] = useState('');
  const [postCode, setPostCode] = useState('');
  const [phone, setPhone] = useState('');
  const [deliveryInstructions, setDeliveryInstructions] = useState('');

  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/images/28698966_1731815253550042_6718612512129699139_o.jpg')}>
      <View style={styles.container}>
        <View style={styles.topLogo}>
          <Image
            source={require('../../assets/images/53219015_2217301215001441_9170682825471426560_n.jpg')}
            style={styles.topLogoImage}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={text => setHouseNumber(text)}
            value={houseNumber}
            placeholder={'house/flat number'}
          />
          <TextInput
            style={styles.input}
            onChangeText={text => setAddress(text)}
            value={address}
            placeholder={'street address'}
          />
          <TextInput
            style={styles.input}
            onChangeText={text => setPostCode(text)}
            value={postCode}
            placeholder={'postcode'}
          />
          <TextInput
            style={styles.input}
            onChangeText={text => setPhone(text)}
            value={phone}
            placeholder={'phone number'}
          />
          <TextInput
            style={styles.input}
            onChangeText={text => setDeliveryInstructions(text)}
            value={deliveryInstructions}
            placeholder={'additional instructions'}
          />
        </View>
        <View style={styles.button}>
          <Button color="#0398aa" raised={true} title="Pay" />
        </View>
      </View>
    </ImageBackground>
  );
};

export default CheckoutAddressEntry;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    opacity: 0.9,
    height: '100%',
    width: '100%',
    backgroundColor: 'whitesmoke',
    justifyContent: 'space-between',
  },
  topLogo: {backgroundColor: '#0398aa', height: 100, zIndex: 1, width: '100%'},
  topLogoImage: {
    width: Dimensions.get('window').width - 250,
    height: Dimensions.get('window').width - 250,
    backgroundColor: '#f4f4f4',
    borderRadius: (Dimensions.get('window').width - 250) / 2,
    alignSelf: 'center',

    borderWidth: 7,
    borderColor: 'whitesmoke',
    marginBottom: 100,
    marginTop: 10,
  },
  inputContainer: {width: '90%'},
  input: {
    margin: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  deliveryInstructions: {
    height: 50,
  },
  button: {margin: 30, width: '80%'},
});
