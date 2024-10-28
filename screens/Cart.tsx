import {
  Dimensions,
  ImageSourcePropType,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CartHeader from '../components/Cart/CartHeader';
import CartItem from '../components/Cart/CartItem';
import Assets from '../constants/images';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CheckoutParam} from '../constants/types';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { removeFromCart } from '../redux/feature/Cart';

// const data: CartProps[] = [
//   {
//     id: 1,
//     name: 'White Dress',
//     price: 15,
//     image: Assets.whiteDress,
//     quantity: 2,
//   },
//   {
//     id: 2,
//     name: 'Red Dress',
//     price: 15,
//     image: Assets.redDress,
//     quantity: 1,
//   },
//   // {
//   //   id: 3,
//   //   name: 'Red Dress',
//   //   price: 15,
//   //   image: Assets.redDress,
//   //   quantity: 1,
//   // },
// ];

// export type CartProps = {
//   id: number;
//   name: string;
//   price: number;
//   image: ImageSourcePropType;
//   quantity: number;
// };

export type CartParam = NativeStackScreenProps<CheckoutParam, 'cart'>;

const Cart = ({navigation, route}: CartParam) => {

  const handleDelete = (id: number) => {

    dispatch(removeFromCart({id: id}));
    
  };
  const dispatch = useAppDispatch();
  const CartItems = useAppSelector(state => state.cart.cartItems);



  return (
    <View style={styles.container}>
      <CartHeader navigation={navigation} route={route} />
      {CartItems.length > 0 ? (
        <>
          <View
            style={{
              height: Dimensions.get('window').height * 0.65,
              marginVertical: 10,
            }}>
            <CartItem handleDelete={handleDelete} />
          </View>
          <TouchableOpacity
            style={styles.checkout}
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('Checkout')
            }>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 14,
                textTransform: 'uppercase',
                fontWeight: 'semibold',
                marginTop: '5%',
              }}>
              Checkout
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.continue}
            activeOpacity={0.9}
            onPress={() => console.log('Continue')}>
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontSize: 14,
                textTransform: 'uppercase',
                fontWeight: 'semibold',
              }}>
              Continue Shopping
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Your cart is empty
          </Text>
        </View>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: '100%',
    backgroundColor: 'white',
  },
  checkout: {
    backgroundColor: '#FA4248',
    width: '100%',
    height: 90,
    zIndex: 1,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    position: 'absolute',
    bottom: '2%',
  },
  continue: {
    backgroundColor: '#F0F0F0',
    width: '100%',
    height: 50,
    zIndex: 2,
    position: 'absolute',
    bottom: 0,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    justifyContent: 'center',
  },
});
