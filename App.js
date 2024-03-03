import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from './screens/Splash';
import AllList from './screens/AllList';
import CreateList from './screens/CreateList';
import ViewList from './screens/ViewList';

import {enableScreens} from 'react-native-screens';
enableScreens();

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Splash"
        component={Splash}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="AllLists"
        component={AllList}
      />
      <Stack.Screen name="CreateList" component={CreateList} />
      <Stack.Screen name="ViewList" component={ViewList} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

export default App;
