/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HomeView = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.parentContainer}>
      <TouchableOpacity
        style={styles.buttonWrapper}
        onPress={() => {
          Alert.alert('Home button pressed !!!');
        }}>
        <Text>HomeView</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.buttonWrapper,
          {backgroundColor: 'pink', marginVertical: 10},
        ]}
        onPress={() => navigation.navigate('JournalScreen')}>
        <Text>Navigate Journal View</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.buttonWrapper,
          {backgroundColor: 'pink', marginVertical: 10},
        ]}
        onPress={() => navigation.navigate('CommentScreen')}>
        <Text>Navigate Comment View</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    backgroundColor: '#add8e6',
  },
});

export default HomeView;
