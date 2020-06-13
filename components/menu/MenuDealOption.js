import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSortUp, faSortDown} from '@fortawesome/free-solid-svg-icons';
import Collapsible from 'react-native-collapsible';
import MenuDealOptionItem from './MenuDealOptionItem';

const MenuDealOption = () => {
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
      <Collapsible style={styles.collapsible} collapsed={isCollapsed} />
    </>
  );
};
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
export default MenuDealOption;
