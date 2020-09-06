import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeView from './../../modules/HomeView';
import JournalView from './../../modules/JournalView';
import CommentView from './../../modules/CommentView';

const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'HomeScreen'}>
      <Stack.Screen name="HomeScreen" component={HomeView} />
      <Stack.Screen name="JournalScreen" component={JournalView} />
      <Stack.Screen name="CommentScreen" component={CommentView} />
    </Stack.Navigator>
  );
};
