import React, {useState} from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  Alert,
  Pressable,
  Image,
  ScrollView,
  Platform,
} from 'react-native';

import {Dropdown} from 'react-native-element-dropdown';
import uuid from 'react-native-uuid';

import {measures} from '../utils/dummyData';

const CreateList = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const [listItem, setListItem] = useState({
    id: 0,
    item: '',
    price: '',
    qty: '',
  });

  const [marketList, setMarketList] = useState([]);

  const [adding, setIsAdding] = useState(false);

  const handleSubmit = () => {
    setIsAdding(true);
    if (listItem?.item?.length === 0 || listItem?.price === 0) {
      Alert.alert('Please provide a valid item name and price');
      setIsAdding(false);
    } else {
      const updatedItem = {...listItem, id: uuid.v4(), measure: selectedValue};
      setMarketList(prevMarketList => [...prevMarketList, updatedItem]);
      setIsAdding(false);
      console.log({updatedItem});
      // Clear the input fields
      setListItem({id: 0, item: '', price: '', qty: ''});
      setSelectedValue('');
    }
  };

  const renderItem = item => {
    return (
      <View key={item.id} style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.body}>
      <ScrollView style={styles.wrapper}>
        {/* Logo */}
        <View style={styles.logoDiv}>
          <Image
            style={styles.logo}
            source={require('../assets/icons/logo.png')}
          />
        </View>

        <View style={styles.visual}>
          <Text style={styles.lead}>Create a new market list</Text>
          <Text style={styles.sub}>Add items to your list</Text>
        </View>

        <View style={styles.listVisual}>
          {marketList?.map(item => (
            <View style={styles.listContainer} key={item?.id}>
              <View style={styles.listTop}>
                <View style={styles.listItemWrap}>
                  <Text style={styles.listItem}>{item?.item}</Text>
                </View>

                <View style={styles.listQtyWrap}>
                  <Text style={styles.listQty}>{item?.qty}</Text>
                  <Text style={styles.listQty}>{item?.measure}</Text>
                </View>

                <View style={styles.listPriceWrap}>
                  <Text style={styles.listPrice}>{item?.price}</Text>
                </View>
              </View>

              <View style={styles.listBottom}>
                <Pressable style={[styles.listbutton, styles.edit]}>
                  <Text style={styles.buttonlistText}>Edit</Text>
                </Pressable>

                <Pressable style={[styles.listbutton, styles.delete]}>
                  <Text style={styles.buttonlistText}>Delete</Text>
                </Pressable>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.label}>What're you buying?</Text>
            <TextInput
              value={listItem.item}
              placeholder="red bell pepper"
              onChangeText={item =>
                setListItem({
                  ...listItem,
                  item: item,
                })
              }
              style={styles.inputField}
            />
          </View>

          <View style={styles.qtyWrap}>
            <View style={styles.measure}>
              <Text style={styles.label}>Measure</Text>
              <View>
                <Dropdown
                  style={styles.selectDrop}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  data={measures}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={'cups, litre, bag etc.'}
                  searchPlaceholder="Search..."
                  value={selectedValue}
                  onChange={item => {
                    setSelectedValue(item.label);
                  }}
                  renderItem={renderItem}
                />
              </View>
            </View>

            <View style={styles.qty}>
              <Text style={styles.label}>Qty</Text>
              <TextInput
                value={`${listItem.qty}`}
                placeholder="5"
                onChangeText={qty =>
                  setListItem({
                    ...listItem,
                    qty: parseFloat(qty),
                  })
                }
                style={styles.inputField}
              />
            </View>
          </View>

          <View style={styles.price}>
            <Text style={styles.label}>Estimated price</Text>
            <TextInput
              value={`${listItem.price}`}
              placeholder="1000"
              onChangeText={price =>
                setListItem({
                  ...listItem,
                  price: parseFloat(price),
                })
              }
              style={styles.inputField}
            />
          </View>

          <View>
            <Pressable style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>
                {adding ? 'Adding..' : 'Add Item'}
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#F9F9F9',
    flex: 1,
  },
  wrapper: {
    paddingTop: 30,
  },

  logoDiv: {
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    paddingBottom: 16,
    paddingHorizontal: 20,
  },

  visual: {
    marginVertical: 32,
    paddingHorizontal: 20,
  },

  lead: {
    fontSize: 32,
    color: 'black',
    fontWeight: '500',
    marginBottom: 8,
    fontFamily: 'Lora',
  },

  sub: {
    fontSize: 16,
    color: '#7B7B7B',
    fontFamily: 'Lora',
  },

  //  list styling

  listVisual: {
    marginBottom: 20,
    backgroundColor: 'transparent',
    paddingVertical: 10,
  },

  listHeader: {},

  listContainer: {
    padding: 20,
    backgroundColor: '#F9F9F9',
    marginBottom: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },

  listTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
    marginBottom: 20,
  },

  listItemWrap: {
    flex: 1,
  },

  listItem: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    fontFamily: 'Lora',
  },

  listQtyWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  listQty: {
    fontSize: 18,
    color: '#BDB8B8',
    fontWeight: '700',
    fontFamily: 'Lora',
  },

  listPriceWrap: {},

  listPrice: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Lora',
  },

  listBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    width: 200,
    marginLeft: 'auto',
  },

  listbutton: {
    paddingVertical: 10,
    borderRadius: 8,
    flex: 1,
  },

  buttonlistText: {
    fontWeight: '600',
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Lora',
  },

  edit: {
    backgroundColor: 'black',
  },

  delete: {
    backgroundColor: '#E15151',
  },

  // Form styling
  form: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 40,
    borderRadius: 10,
  },

  label: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
    fontFamily: 'Lora',
  },

  inputField: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 18,
    fontFamily: 'Lora',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#0BDE53',
  },

  qtyWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    marginVertical: 20,
  },

  select: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  selectDrop: {
    // height: 50,
    backgroundColor: 'white',
    color: 'black',
    fontSize: 18,
    fontFamily: 'Lora',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#0BDE53',
  },

  placeholderStyle: {
    fontSize: 16,
    fontFamily: 'Lora',
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: 'Lora',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    fontFamily: 'Lora',
  },

  item: {
    padding: 10,
  },
  textItem: {
    fontSize: 16,
    fontFamily: 'Lora',
  },

  measure: {
    flex: 1,
  },

  qty: {
    width: 100,
  },

  price: {
    flex: 1,
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#3CCF6E',
    paddingVertical: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#4CDD7E',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(60, 207, 110, 0.3)',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  buttonText: {
    fontWeight: '600',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Lora',
  },
});

export default CreateList;
