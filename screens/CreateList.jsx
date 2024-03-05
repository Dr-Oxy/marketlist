/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext, useEffect} from 'react';

import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Alert,
  Pressable,
  ScrollView,
  Modal,
} from 'react-native';

import {Dropdown} from 'react-native-element-dropdown';

import {styles} from '../styles/Create';

import uuid from 'react-native-uuid';
import dayjs from 'dayjs';
import {AppContext} from '../utils/appContext';
import {measures} from '../utils/dummyData';
import {formatMoney} from '../utils/helpers';

const CreateList = () => {
  const {allLists, addList} = useContext(AppContext);
  const today = dayjs().format('dddd, D MMMM, YYYY');

  const [marketList, setMarketList] = useState([]);

  const [listItem, setListItem] = useState({
    id: 0,
    item: '',
    price: '',
    qty: '',
  });

  const [selectedValue, setSelectedValue] = useState('');

  const [selectedItem, setSelectedItem] = useState(null);

  const [adding, setIsAdding] = useState(false);
  const [edit, setIsEditing] = useState(false);

  // fill up input fields on edit
  useEffect(() => {
    if (selectedItem) {
      setListItem(selectedItem);
      setSelectedValue(selectedItem.measure);
    }
  }, [selectedItem]);

  // Add list item to marketList
  const handleSubmit = () => {
    setIsAdding(true);
    if (listItem?.item?.length === 0 || listItem?.price === 0) {
      Alert.alert('Please provide a valid item name and price');
      setIsAdding(false);
    } else {
      const updatedItem = {...listItem, id: uuid.v4(), measure: selectedValue};
      setMarketList(prevMarketList => [...prevMarketList, updatedItem]);
      setIsAdding(false);
      // Clear the input fields
      setListItem({id: 0, item: '', price: '', qty: ''});
      setSelectedValue('');
    }
  };

  // sum marketlist price
  const sumPrice = marketList?.reduce((price, item) => price + item.price, 0);

  // delete list item
  const deleteItem = id => {
    const filtered = marketList?.filter(item => item.id !== id);
    setMarketList(filtered);
  };

  //display item for edit

  const displayItem = item => {
    setIsEditing(true);
    const findItem = marketList?.find(i => i.id === item.id);

    setSelectedItem(findItem);
  };

  //edit list item
  const handleEditing = () => {
    const updatedItem = {
      ...listItem,
      id: selectedItem?.id,
      measure: selectedValue,
    };

    const item = marketList?.find(i => i.id === selectedItem?.id);

    //If items exist in list
    if (item) {
      setMarketList(marketList?.map(x => (x.id === item.id ? updatedItem : x)));
    }
    setSelectedItem(null);
    setListItem({id: 0, item: '', price: '', qty: ''});
    setSelectedValue('');
    setIsEditing(false);
  };

  // render component
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
        <View style={styles.visual}>
          <Text style={styles.lead}>Create a new market list</Text>
          <Text style={styles.sub}>Add items to your list</Text>
        </View>

        <View style={styles.header}>
          <View>
            <Text style={styles.listName}># List {allLists?.length + 1} </Text>
            <Text style={styles.listDate}>{today}</Text>
          </View>

          <View>
            <Pressable
              onPress={() =>
                addList({
                  id: uuid.v4(),
                  data: marketList,
                  date: today,
                  total: sumPrice,
                  name: `# List ${allLists?.length + 1}`,
                })
              }
              disabled={marketList?.length < 1}
              style={styles.headerbutton}>
              <Text style={styles.hbuttonText}>Save List</Text>
            </Pressable>
          </View>
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
                  <Text style={styles.listPrice}>
                    {formatMoney(item?.price)}
                  </Text>
                </View>
              </View>

              <View style={styles.listBottom}>
                <Pressable
                  onPress={() => displayItem(item)}
                  style={styles.listbutton}>
                  <Text style={[styles.buttonlistText, styles.edit]}>Edit</Text>
                </Pressable>

                <Pressable
                  onPress={() => deleteItem(item?.id)}
                  style={styles.listbutton}>
                  <Text style={[styles.buttonlistText, styles.delete]}>
                    Delete
                  </Text>
                </Pressable>
              </View>
            </View>
          ))}

          <View style={styles.totalPrice}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
              <Text style={styles.totalPriceText}>Total:</Text>
              <Text style={styles.totalPriceText}>
                ₦ {formatMoney(sumPrice)}
              </Text>
            </View>
            <Text style={styles.warning}>
              Always remember to carry more cash than budgeted, inflation is
              real.
            </Text>
          </View>
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.label}>
              {edit ? 'Edit list item' : 'What are you buying?'}
            </Text>
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
            {edit ? (
              <Pressable onPress={handleEditing} style={styles.button}>
                <Text style={styles.buttonText}>Edit Item</Text>
              </Pressable>
            ) : (
              <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>
                  {adding ? 'Adding..' : 'Add Item'}
                </Text>
              </Pressable>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateList;
