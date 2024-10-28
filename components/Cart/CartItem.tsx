import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useMemo } from 'react';
import CartTotal from './CartTotal';
import Assets from '../../constants/images';
import { Product } from '../../constants/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addToCart, removeFromCart} from '../../redux/feature/Cart';

const CartItem = ({
  handleDelete,
}: {
  handleDelete: (id: number) => void;
}) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cart.cartItems);


    const subTotal = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      return acc + item.price * (item.quantity ?? 1);
    }, 0);
  }, [cartItems]);


  return (
    <FlatList
      contentContainerStyle={{
        rowGap: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
      }}
      ListFooterComponent={<CartTotal total={subTotal} />}
      data={cartItems}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => {
        return (
          <View style={styles.container}>
            <Image source={{uri:item.image_url}} style={styles.image} />
            <View style={styles.subView}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.price}>${(item.price).toFixed(2)}</Text>
              </View>
              <Text style={{fontSize: 12, color: '#000', opacity: 0.5}}>
                Women
              </Text>
              <View
                style={{
                  height: 40,
                  marginTop: '10%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={styles.Quantity}>
                  <Text  style={styles.text} 
                  onPress={()=>
                      dispatch(addToCart({...item,quantity:1}))
                  }
                  >+</Text>
                  <Text style={styles.text}>{item.quantity}</Text>
                  <Text style={styles.text} onPress={()=>
                      dispatch(removeFromCart({id:item.id}))
                  } >-</Text>
                </View>
                <TouchableOpacity
                  style={{
                    height: 55,
                    width: 53,
                    marginTop: '-4%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#FA4248',
                    borderRadius: 18,
                  }}
                  onPress={() => handleDelete(item.id)}>
                  <Image
                    source={Assets.bin}
                    style={{
                      height: 20,
                      width: 14,
                      tintColor: 'white',
                      objectFit: 'contain',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      }}
    />
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 120,
    columnGap: 10,
    width: '100%',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: '100%',
    width: '37%',
    objectFit: 'contain',
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    borderColor: '#C5C2C2',
    borderWidth: 1,
  },
  subView: {
    width: '60%',
    height: '100%',
  },
  itemName: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
    width: '60%',
  },
  price: {
    fontSize: 18,
    fontWeight: 'medium',
    color: '#FA4248',
  },
  Quantity: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '70%',
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: 20,
    paddingHorizontal: 8,
    backgroundColor: '#0000000F',
  },
  text: {
    fontSize: 16,
    color: 'black',
    width: 20,

  },
});
