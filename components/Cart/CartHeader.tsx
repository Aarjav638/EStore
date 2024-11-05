import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Assets from '../../constants/images';
import {CartParam} from '../../screens/Cart';
import {DrawerActions} from '@react-navigation/native';

const CartHeader = ({navigation}: {navigation: CartParam}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Image
            source={Assets.menu}
            style={{
              tintColor: '#000000',
              height: 30,
              width: 30,
              objectFit: 'contain',
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'medium',
            color: '#FA4248',
          }}>
          Shopping Cart
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Image
            source={Assets.search}
            style={{
              tintColor: '#757575',
              height: 18,
              width: 18,
              objectFit: 'contain',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartHeader;

const styles = StyleSheet.create({
  container: {
    height: '18%',
    position: 'relative',
    padding: '8%',
    paddingTop: '15%',
    top: 0,
    left: 0,
    right: 0,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
    shadowColor: '#00000d',
    shadowOffset: {
      height: 5,
      width: 0,
    },
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
  },
});
