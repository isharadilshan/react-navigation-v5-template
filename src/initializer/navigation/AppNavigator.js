import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginView from './../../modules/LoginView';
import {BottomNavigator} from './BottomNavigator';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'BottomStack'}>
      <Stack.Screen name="Login" component={LoginView} />
      <Stack.Screen name="BottomStack" component={BottomNavigator} />
    </Stack.Navigator>
  );
};
