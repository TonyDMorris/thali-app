import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  Dimensions,
  ImageBackground,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import stripe from 'tipsi-stripe';
const CheckoutAddressEntry = ({order}) => {
  stripe.setOptions({
    publishableKey:
      'pk_test_51H0Rn9A5cyq20WwH1ZifHxKJdSCRni4BX1NwnDWzgnCW7hnK81Z2Ie2LlLdb7Cp9foY4Y3rjQfdj30VZMgCfvK2w00synDt5JP',

    androidPayMode: 'test', // Android only
  });

  const [gPayIsAllowed, setGPayIsAllowed] = useState(false);
  const [houseNumber, setHouseNumber] = useState('');
  const [address, setAddress] = useState('');
  const [postCode, setPostCode] = useState('');
  const [phone, setPhone] = useState('');
  const [deliveryInstructions, setDeliveryInstructions] = useState('');

  const [token, setToken] = useState({});
  useEffect(() => {
    const checkNative = async () => {
      const allowed = await stripe.deviceSupportsNativePay();
      console.log(allowed);
      setGPayIsAllowed(allowed);
    };
    checkNative();
  }, []);

  const payByCard = async () => {
    try {
      const token = await stripe.paymentRequestWithCardForm({
        total_price: '100.00',
        currency_code: 'USD',
      });
      setToken(token);
    } catch (error) {
      console.log(error);
    }
  };
  const payByGPay = async () => {
    try {
      const token = await stripe.paymentRequestWithNativePay({
        total_price: '100.00',
        currency_code: 'USD',
        line_items: [
          {
            currency_code: 'GBP',
            description: 'your order',
            total_price: `${order.totalPrice}`,
            unit_price: `${order.totalPrice}`,
            quantity: '1',
          },
        ],
      });
      setToken(token);
    } catch (error) {
      console.log(error);
    }
  };
  const handlePay = gPayIsAllowed => {
    if (gPayIsAllowed) {
      payByGPay();
    } else {
      payByCard();
    }
  };

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

        <ScrollView style={styles.inputContainer}>
          <View>
            <Text>name</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setHouseNumber(text)}
              value={houseNumber}
              placeholder={'Name'}
            />
          </View>
          <View>
            <Text>House/Flat number</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setHouseNumber(text)}
              value={houseNumber}
              placeholder={'House/Flat number'}
            />
          </View>
          <View>
            <Text>Street Address</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setAddress(text)}
              value={address}
              placeholder={'Street Address'}
            />
          </View>
          <View>
            <Text>Postcode</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setPostCode(text)}
              value={postCode}
              placeholder={'Postcode'}
            />
          </View>
          <View>
            <Text>Phone Number</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setPhone(text)}
              value={phone}
              placeholder={'Phone Number'}
            />
          </View>
          <View>
            <Text>Additional Instructions</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setDeliveryInstructions(text)}
              value={deliveryInstructions}
              placeholder={'Additional Instructions'}
            />
          </View>
        </ScrollView>
        <View style={styles.button}>
          <Button
            onPress={() => {
              handlePay(gPayIsAllowed);
            }}
            color="#0398aa"
            raised={true}
            title="Pay"
          />
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
  inputContainer: {width: '90%', marginTop: 40},
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
