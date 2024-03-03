import React from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const AllList = () => {
  const navigation = useNavigation();

  const gotoCreate = () => {
    navigation.navigate('CreateList');
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
          <Text style={styles.lead}>Let’s go shopping today!</Text>
          <Text style={styles.sub}>Your list is empty</Text>

          <ImageBackground
            style={styles.bg}
            source={require('../assets/images/market-1.png')}
          />
        </View>

        <View>
          <Pressable onPress={gotoCreate} style={styles.button}>
            <Text style={styles.buttonText}>Create List</Text>
          </Pressable>
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
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  logoDiv: {
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    paddingBottom: 16,
  },

  visual: {
    marginVertical: 32,
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

  bg: {
    height: 204,
    marginTop: 20,
    borderRadius: 12,
  },

  button: {
    backgroundColor: '#3CCF6E',
    paddingVertical: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#4CDD7E',
  },
  buttonText: {
    fontWeight: '600',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Lora',
  },

  inputField: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 18,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },

  list: {
    width: 300,
    paddingHorizontal: 40,
    marginVertical: 50,
  },
  itemWrap: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    fontSize: 32,
    color: '#4CAF50',
  },
});

export default AllList;
