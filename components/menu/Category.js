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

  return (
    <>
      <TouchableOpacity
        style={styles.categoryButton}
        onPress={() => {
          setCollapse(!isCollapsed);
        }}>
        <Text>{`${name}`}</Text>
        <View>
          <FontAwesomeIcon
            color="whitesmoke"
            size={20}
            icon={isCollapsed ? faSortDown : faSortUp}
          />
        </View>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        {menu_deals.map(deal => {
          return <DealItem key={deal.id} {...deal} />;
        })}
        {food_items.map(fi => {
          return <FoodItem key={fi.id} key={fi.id} {...fi} />;
        })}
      </Collapsible>
    </>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryButton: {
    height: 50,
    borderWidth: 0.2,
    borderColor: 'grey',
    backgroundColor: '#f8baaa',
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
});
