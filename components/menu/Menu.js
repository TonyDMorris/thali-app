import React, {useState, useContext, useEffect} from 'react';
import Category from './Category';
import {BasketContext} from '../basket/BasketContext';
import {
  ScrollView,
  View,
  StyleSheet,
  ImageBackground,
  Text,
} from 'react-native';
import BasketIndicator from '../basket/BasketIndicator';

const Menu = ({categories}) => {
  const context = useContext(BasketContext);
  const baseURL = 'https://api.towidomo.dev';
  const resaurantId = '1';
  const [content, setContent] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${baseURL}/restaurants/${resaurantId}`);
      const json = await response.json();

      setContent(json[0]);
    }
    fetchData();
  }, []);
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../../assets/images/52854544_2221519711246258_720619186404982784_o.jpg')}>
      <View style={styles.scrollView}>
        <ScrollView>
          {content &&
            content.menu_categories.map(cat => {
              return <Category key={cat.id} {...cat} />;
            })}
        </ScrollView>
        <BasketIndicator />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  scrollView: {height: '100%'},
});
Menu.options = {
  topBar: {
    title: {text: 'MENU', alignment: 'center'},
  },
};

export default Menu;
