import React, {useState} from 'react';
import {TouchableOpacity, TouchableHighlight} from 'react-native';
import Collapsible from 'react-native-collapsible';
import {StyleSheet, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSortUp, faSortDown} from '@fortawesome/free-solid-svg-icons';

const MenuDealOptionSet = ({food_items, title, index, addOption}) => {
  const [isCollapsed, setCollapse] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [option, setOption] = useState({});
  const handleSelect = (fi, index) => {
    if (fi.food_item_options && fi.food_item_options.length > 0) {
      Navigation.showModal({
        stack: {
          children: [
            {
              component: {
                name: 'com.myApp.FoodItemOptionsSelectionModal',
                passProps: {
                  foodItem: fi,
                  addItem: foodItem => {
                    addOption(foodItem, index);
                    setOption(foodItem);
                  },
                },
                options: {
                  modalPresentationStyle: 'overCurrentContext',
                  topBar: {
                    title: {
                      text: selectionNumberString(
                        foodItem.food_item_options_minimum_selection,
                        foodItem.food_item_options_maximum_selection,
                      ),
                    },
                  },
                },
              },
            },
          ],
        },
      });
    } else {
      addOption(fi, index);
      setOption(fi);
    }
  };
  const selected = (id, option) => {
    return id === option.id;
  };
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
        <Text style={styles.text}>{`${title} ${index}`}</Text>
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
          food_items.map(fi => {
            return (
              <TouchableHighlight
                style={
                  selected(fi.id, option)
                    ? {...styles.container, ...styles.selected}
                    : styles.container
                }
                onPress={() => {
                  handleSelect(fi, index);
                }}
                key={fi.id}>
                <View style={styles.titleDescriptionContainer}>
                  <Text style={styles.title}>{fi.name}</Text>
                  <Text style={styles.description}>{fi.description}</Text>
                </View>
              </TouchableHighlight>
            );
          })}
      </Collapsible>
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
  selected: {backgroundColor: 'green'},
  selected: {
    backgroundColor: 'mediumseagreen',
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'whitesmoke',
    opacity: 0.9,
  },
  optionButton: {flexGrow: 1},

  optionContainer: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: 'silver',
  },
  title: {fontSize: 20},
  description: {fontSize: 16},
  titleDescriptionContainer: {padding: 10, marginLeft: 5},
  additionalCharge: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  addOption: {
    justifyContent: 'space-around',
    flexDirection: 'column',
    marginRight: '5%',

    alignItems: 'center',
  },
  removeOption: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeOptionIcon: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: 'goldenrod',
    elevation: 5,
  },
});

export default MenuDealOptionSet;
