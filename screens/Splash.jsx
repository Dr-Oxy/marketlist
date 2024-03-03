/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

import {View, ImageBackground, Image, StyleSheet, Button} from 'react-native';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(gotoAllList, 3000);
    return () => clearTimeout(timeout);
  }, []);

  const gotoAllList = () => {
    navigation.navigate('AllLists');
  };

  return (
    <ImageBackground
      source={require('../assets/images/splashbg.png')}
      style={styles.body}>
      <View>
        <Image source={require('../assets/icons/screenLogo.png')} />

        <Button onPress={gotoAllList} color="white" title="Move" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#F9F9F9',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Splash;
