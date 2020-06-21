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

const Menu = props => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const {content} = props;
    setMenu(content);
  }, []);
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../../assets/images/52854544_2221519711246258_720619186404982784_o.jpg')}>
      <View style={styles.scrollView}>
        <ScrollView>
          {menu &&
            menu.menu_categories.map((cat, i) => {
              if (i === 0) {
                return (
                  <Category key={cat.id} {...cat} shouldBeCollapsed={false} />
                );
              } else {
                return (
                  <Category key={cat.id} {...cat} shouldBeCollapsed={true} />
                );
              }
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
