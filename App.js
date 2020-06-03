/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  ImageBackground,
  Button,
  Dimensions,
  View,
} from 'react-native';

import {Navigation} from 'react-native-navigation';
import {BasketProvider} from './components/basket/BasketContext';
import BasketTopBar from './components/basket/BasketTopBar';

const App = props => {
  const baseURL = 'https://api.towidomo.dev';
  const resaurantId = '1';
  const [content, setContent] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${baseURL}/restaurants/${resaurantId}`);
      const json = await response.json();

      setContent(json[0]);
    }
    fetchData();
  }, []);

  return (
    <BasketProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ImageBackground
          style={styles.backgroundImage}
          source={require('./assests/images/51095796_2175438532521043_6085140477068181504_o.jpg')}>
          <ScrollView
            style={styles.container}
            contentInsetAdjustmentBehavior="automatic">
            <Image
              style={styles.logo}
              source={require('./assests/images/53219015_2217301215001441_9170682825471426560_n.jpg')}
            />
            <View style={styles.buttonContainer}>
              <Button
                color="#f8bac7"
                buttonStyle={styles.menuButton}
                title="Menu"
                onPress={() =>
                  Navigation.push(props.componentId, {
                    component: {
                      name: 'com.myApp.Menu',
                      passProps: {
                        categories: content.menu_categories,
                      },
                    },
                  })
                }
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    </BasketProvider>
  );
};
App.options = {
  topBar: {
    title: {
      component: {
        name: 'com.myApp.BasketTopBar',
        alignment: 'center',
      },
    },
  },
};

const styles = StyleSheet.create({
  logo: {
    width: Dimensions.get('window').width - 100,
    height: Dimensions.get('window').width - 100,
    backgroundColor: '#f4f4f4',
    borderRadius: (Dimensions.get('window').width - 100) / 2,
    alignSelf: 'center',
    opacity: 0.7,
    borderWidth: 1,
    borderColor: 'red',
    marginBottom: 100,
    marginTop: 50,
  },
  container: {
    padding: 20,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    overflow: 'hidden',
    height: 700,
  },
  buttonContainer: {width: 300, alignSelf: 'center'},
});

export default App;
