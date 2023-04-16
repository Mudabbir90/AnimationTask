import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from '../Screens/Screen1';
import Screens2 from '../Screens/Screens2';
import Screen3 from '../Screens/Screen3';

const Stack = createNativeStackNavigator();

const AppNavigater = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Screens2"
          component={Screens2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Screen3"
          component={Screen3}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigater;

const styles = StyleSheet.create({});
