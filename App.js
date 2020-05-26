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
} from 'react-native';

import {Navigation} from 'react-native-navigation';

const App = props => {
  const baseURL = 'https://api.towidomo.dev';
  const resaurantId = '1';
  const [content, setContent] = useState({});

  // useEffect(() => {
  //   return () => {
  //     return fetch(`${baseURL}/restaurants/${resaurantId}`)
  //       .then(response => response.json())
  //       .then(json => {
  //         setContent(json);
  //         console.log
  //         console.log(content);
  //       })
  //       .catch(error => {
  //         //TODO: error screen all information is required for app to run
  //         console.error(error);
  //       });
  //   };
  // }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${baseURL}/restaurants/${resaurantId}`);
      const json = await response.json();

      setContent(json[0]);
    }
    fetchData();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ImageBackground
          style={styles.backgroundImage}
          source={require('./assests/images/Mumbai_Dabbawala_or_Tiffin_Wallahs-_200,000_Tiffin_Boxes_Delivered_Per_Day.jpg')}>
          <ScrollView
            style={styles.container}
            contentInsetAdjustmentBehavior="automatic">
            <Image
              style={styles.logo}
              source={require('./assests/images/thalilogo.png')}
            />
            <Button
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
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};
App.options = {
  topBar: {
    title: {
      text: 'Thali',
      color: 'black',
    },
  },
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    backgroundColor: '#f4f4f4',
    borderRadius: 100,
    alignSelf: 'center',
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
});

export default App;
