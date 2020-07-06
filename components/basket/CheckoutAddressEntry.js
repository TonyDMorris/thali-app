import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  ImageBackground,
  ScrollView,
} from 'react-native';
import FormInput from '../form/FormInput';

import {
  faFileSignature,
  faEnvelopeSquare,
  faPhone,
  faAddressCard,
  faAt,
} from '@fortawesome/free-solid-svg-icons';

const CheckoutAddressEntry = ({order}) => {
  const [details, setDetails] = useState({
    name: {text: '', error: false},
    houseNumber: {text: '', error: false},
    address: {text: '', error: false},
    postcode: {text: '', error: false},
    phone: {text: '', error: false},
    email: {text: '', error: false},
    additionalInstructions: {text: '', error: false},
  });

  const validateAndApply = (name, text, hook) => {
    const validators = {
      name: text => {
        return text.length < 40 ? {error: false} : {error: 'name too long'};
      },
      houseNumber: text => {
        return text.length < 40
          ? {error: false}
          : {error: 'house name/number is too long'};
      },
      address: text => {
        return text.length < 150 ? {error: false} : {error: 'address too long'};
      },
      postcode: text => {
        const postcodeRegEx = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i;
        return postcodeRegEx.test(text)
          ? {error: false}
          : {error: 'invalid postcode'};
      },
      phone: text => {
        const phoneRegEx = /^(?:0|\+?44)(?:\d\s?){9,10}$/;
        return phoneRegEx.test(text)
          ? {error: false}
          : {error: 'invalid phone number'};
      },
      email: text => {
        const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return emailRegEx.test(text)
          ? {error: false}
          : {error: 'invalid email'};
      },
      additionalInstructions: text => {
        return text.length < 40
          ? {error: false}
          : {error: 'too many instructions'};
      },
    };

    hook(prevDetails => {
      prevDetails[name].text = text;
      prevDetails[name].error = validators[name](text).error;
      return {...prevDetails};
    });
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

        <ScrollView style={styles.TextInputContainer}>
          <FormInput
            error={details.name.error}
            fs
            onChangeText={text => {
              validateAndApply('name', text, setDetails);
            }}
            value={details.name.text}
            placeholder={'Name'}
            styles={styles.TextInput}
            icon={faFileSignature}
          />
          <FormInput
            error={details.houseNumber.error}
            onChangeText={text => {
              validateAndApply('houseNumber', text, setDetails);
            }}
            value={details.houseNumber.text}
            placeholder={'House/Flat number'}
            styles={styles.TextInput}
            icon={faAddressCard}
          />
          <FormInput
            error={details.address.error}
            onChangeText={text => {
              validateAndApply('address', text, setDetails);
            }}
            value={details.address.text}
            placeholder={'Street Address'}
            styles={styles.TextInput}
            icon={faAddressCard}
          />
          <FormInput
            error={details.postcode.error}
            onChangeText={text => {
              validateAndApply('postcode', text, setDetails);
            }}
            value={details.postcode.text}
            placeholder={'Postcode'}
            styles={styles.TextInput}
            icon={faEnvelopeSquare}
          />
          <FormInput
            error={details.phone.error}
            onChangeText={text => {
              validateAndApply('phone', text, setDetails);
            }}
            value={details.phone.text}
            placeholder={'Phone Number'}
            styles={styles.TextInput}
            icon={faPhone}
          />
          <FormInput
            error={details.email.error}
            onChangeText={text => {
              validateAndApply('email', text, setDetails);
            }}
            value={details.email.text}
            placeholder={'e-mail'}
            styles={styles.TextInput}
            icon={faAt}
          />

          <FormInput
            error={details.additionalInstructions.error}
            icon={false}
            styles={{...styles.TextInput, ...styles.deliveryInstructions}}
            onChangeText={text => {
              validateAndApply('additionalInstructions', text, setDetails);
            }}
            value={details.additionalInstructions.text}
            placeholder={'Additional Instructions'}
          />
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

    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(245,245,245,0.9)',
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
  TextInputContainer: {width: '90%', marginTop: 40},
  TextInput: {
    margin: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'whitesmoke',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
  },
  deliveryInstructions: {
    height: 100,
  },
  button: {margin: 30, width: '80%'},
});
//import stripe from 'tipsi-stripe';
// stripe.setOptions({
//   publishableKey:
//     'pk_test_51H0Rn9A5cyq20WwH1ZifHxKJdSCRni4BX1NwnDWzgnCW7hnK81Z2Ie2LlLdb7Cp9foY4Y3rjQfdj30VZMgCfvK2w00synDt5JP',

//   androidPayMode: 'test', // Android only
// });

// const [token, setToken] = useState({});
// useEffect(() => {
//   const checkNative = async () => {
//     const allowed = await stripe.deviceSupportsNativePay();
//     console.log(allowed);
//     setGPayIsAllowed(allowed);
//   };
//   checkNative();
// }, []);

// const payByCard = async () => {
//   try {
//     const token = await stripe.paymentRequestWithCardForm({
//       total_price: '100.00',
//       currency_code: 'USD',
//     });
//     setToken(token);
//   } catch (error) {
//     console.log(error);
//   }
// };
// const payByGPay = async () => {
//   try {
//     const token = await stripe.paymentRequestWithNativePay({
//       total_price: '100.00',
//       currency_code: 'USD',
//       line_items: [
//         {
//           currency_code: 'GBP',
//           description: 'your order',
//           total_price: `${order.totalPrice}`,
//           unit_price: `${order.totalPrice}`,
//           quantity: '1',
//         },
//       ],
//     });
//     setToken(token);
//   } catch (error) {
//     console.log(error);
//   }
// };
// const handlePay = gPayIsAllowed => {
//   if (gPayIsAllowed) {
//     payByGPay();
//   } else {
//     payByCard();
//   }
// };
