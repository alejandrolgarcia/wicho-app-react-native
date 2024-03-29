import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './src/navigation/TabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}

export default App;
