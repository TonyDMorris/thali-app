import React, {useState, useContext} from 'react';
import {
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TouchableHighlightBase,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import FoodItem from './FoodItem';
import DealItem from './DealItem';
import {StyleSheet, Text, View} from 'react-native';
import {BasketProvider} from '../basket/BasketContext';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSortUp, faSortDown} from '@fortawesome/free-solid-svg-icons';
const Category = ({name, food_items, menu_deals}) => {
  const [isCollapsed, setCollapse] = useState(true);
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.categoryButton}
        onPress={() => {
          if (!loaded) {
            setLoaded(true);
          }
          setCollapse(!isCollapsed);
        }}>
        <Text style={styles.text}>{`${name}`}</Text>
        <View>
          <FontAwesomeIcon
            color="whitesmoke"
            size={20}
            icon={isCollapsed ? faSortDown : faSortUp}
          />
        </View>
      </TouchableOpacity>
      <Collapsible style={styles.collapsible} collapsed={isCollapsed}>
        {loaded &&
          menu_deals.map(deal => {
            return <DealItem key={deal.id} {...deal} />;
          })}
        {loaded &&
          food_items.map(fi => {
            return <FoodItem key={fi.id} {...fi} />;
          })}
      </Collapsible>
    </>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#0398aa',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  collapsible: {},
  text: {color: 'black', fontSize: 20, fontWeight: '200'},
});
