import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Filter = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#111'}}>Filter</Text>
    </View>
  );
};

export default Filter;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
