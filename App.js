/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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
                    name: 'Menu',
                    options: {
                      topBar: {
                        title: {
                          text: 'Menu',
                        },
                      },
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
    background: {
      color: '#feecd9',
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
