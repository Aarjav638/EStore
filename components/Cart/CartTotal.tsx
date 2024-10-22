import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const CartTotal = ({total}: {total: number}) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          color: '#241332',
          fontWeight: 'bold',
        }}>
        Totals
      </Text>
      <View style={styles.subTotal}>
        <Text style={{fontSize: 16, color: '#000000'}}>Sub Total</Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#0000000d',
            borderStyle: 'dashed',
            width: 140,
            height: 1,
          }}
        />
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000000'}}>
          ${total.toFixed(2)}
        </Text>
      </View>
      <View style={styles.subTotal}>
        <Text style={{fontSize: 16, color: '#000000'}}>Shipping</Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#0000000d',
            borderStyle: 'dashed',
            width: 140,
            height: 1,
            backgroundColor: '#F5F5F5',
          }}
        />
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000000'}}>
          ${'0.00'}
        </Text>
      </View>
      <View style={styles.Voucher}>
        <TextInput
          style={{
            fontSize: 16,
            color: '#000000',
            width: '70%',
          }}
          placeholder="Enter Voucher Code"
          placeholderTextColor={'#707070'}
          inputMode="text"
          keyboardAppearance="default"
          cursorColor={'#000000'}
        />

        <Text
          style={{
            fontSize: 14,
            color: '#000000',
            fontWeight: '500',
            marginRight: 10,
          }}>
          Apply
        </Text>
      </View>
    </View>
  );
};

export default CartTotal;

const styles = StyleSheet.create({
  container: {
    height: 200,
    paddingHorizontal: 10,
  },
  subTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: '30%',
    width: '100%',
  },
  Voucher: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 50,
    width: '100%',
    backgroundColor: '#F5F5F5',
    borderRadius: 30,
  },
});
