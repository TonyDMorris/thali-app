/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState, useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  ImageBackground,
  Button,
  Dimensions,
  View,
} from 'react-native';

import {Navigation} from 'react-native-navigation';
import {baseURL, restaurantID} from './constants/constants';

const App = props => {
  const [content, setContent] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${baseURL}/restaurants/${restaurantID}`);
      const json = await response.json();

      setContent(json[0]);
    }
    fetchData();
  }, []);
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('./assets/images/51095796_2175438532521043_6085140477068181504_o.jpg')}>
      <View style={styles.container}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Image
            style={styles.logo}
            source={require('./assets/images/53219015_2217301215001441_9170682825471426560_n.jpg')}
          />
        </ScrollView>
        <View style={styles.buttonContainer}>
          <Button
            color="#039894"
            buttonStyle={styles.menuButton}
            title="Menu"
            onPress={() =>
              Navigation.push(props.componentId, {
                component: {
                  name: 'com.myApp.Menu',
                  passProps: {content},
                  options: {},
                },
              })
            }
          />
        </View>
      </View>
    </ImageBackground>
  );
};
App.options = {
  topBar: {
    title: {
      text: 'Thali',
    },
  },
};

const styles = StyleSheet.create({
  logo: {
    width: Dimensions.get('window').width - 100,
    height: Dimensions.get('window').width - 100,
    backgroundColor: '#f4f4f4',
    borderRadius: (Dimensions.get('window').width - 100) / 2,

    opacity: 0.7,
    borderWidth: 3,
    borderColor: 'red',
  },
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: '10%',
    marginBottom: '10%',
    alignSelf: 'center',
    height: '80%',

    width: '100%',
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  buttonContainer: {width: 300},
});

export default App;
