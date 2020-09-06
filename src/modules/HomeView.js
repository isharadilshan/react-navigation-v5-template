import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HomeView = () => {
  return (
    <View style={styles.parentContainer}>
      <TouchableOpacity
        style={styles.buttonWrapper}
        onPress={() => {
          Alert.alert('Home button pressed !!!');
        }}>
        <Text>HomeView</Text>
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
    backgroundColor: 'blue',
  },
});

export default HomeView;
