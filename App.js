import React from 'react';

import {View, Text} from 'react-native';

import Splash from './screens/Splash';
import AllList from './screens/AllList';
import CreateList from './screens/CreateList';
import ViewList from './screens/ViewList';

function App() {
  return (
    <View>
      <Text>Hello app</Text>
    </View>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Splash" component={Splash} />
    //     <Stack.Screen name="AllList" component={AllList} />
    //     <Stack.Screen name="CreateList" component={CreateList} />
    //     <Stack.Screen name="ViewList" component={ViewList} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;
