import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Cart = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#000'}}>Cart</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
