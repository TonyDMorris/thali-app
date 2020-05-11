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
  StyleSheet
} from 'react-native';



const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
       >
         <Image style={styles.logo} source={require('./assests/images/thalilogo.png')} />
            
          
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
App.options = {
  topBar: {
    title: {
      text: 'Thali',
      color: 'black'
    },
    background: {
      color: '#feecd9'
    }
  }
}

const styles = StyleSheet.create({
  
  logo: {
    width: 66,
    height: 58,
  }
});

export default App;
