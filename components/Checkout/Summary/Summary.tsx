import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Address, paymentData} from '../../../screens/Checkout';
import Assets from '../../../constants/images';
import {getCardIcon} from '../../../utils/getCardIcon';
import {useAppSelector} from '../../../redux/hooks';

const Summary = ({
  paymentData,
  addressData,
}: {
  paymentData: paymentData;
  addressData: Address;
}) => {
  const cartItems = useAppSelector(state => state.cart.cartItems);
  console.log('CartItems', cartItems);
  console.log('paymentData', paymentData);
  console.log('addressData', addressData);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Summary</Text>
      <View style={{...styles.itemWrapper, flex: 2}}>
        <FlatList
          horizontal
          contentContainerStyle={{paddingHorizontal: 10, columnGap: 20}}
          data={cartItems}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View
              style={{
                justifyContent: 'center',
                gap: 4,
              }}>
              <Image source={{uri: item.image_url}} style={styles.itemImage} />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
          )}
        />
      </View>
      <View style={{...styles.itemWrapper, flex: 1.3}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.header}>Shipping Address</Text>
          <Image
            source={Assets.check}
            style={{
              width: 25,
              height: 25,
              objectFit: 'contain',
              tintColor: '#Fa4248',
              marginRight: 20,
            }}
          />
        </View>
        <Text style={styles.address}>
          {`${addressData.street1}, ${addressData.street2}, ${addressData.city}, ${addressData.state}, ${addressData.country}`}
        </Text>
        <Text
          style={{
            ...styles.address,
            color: '#Fa4248',
            marginTop: 10,
            fontSize: 14,
          }}>
          Change
        </Text>
      </View>
      <View style={{...styles.itemWrapper, borderBottomWidth: 0}}>
        <Text style={styles.header}>Payment</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Image
            source={getCardIcon(paymentData.type)}
            style={{
              width: 30,
              height: 30,
              objectFit: 'contain',
              marginRight: 20,
            }}
          />
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              width: '60%',
            }}>
            <Text
              style={{
                fontSize: 12,
                color: '#000',
                fontWeight: 'semibold',
                marginBottom: 4,
                opacity: 0.5,
                textTransform: 'uppercase',
              }}>
              {paymentData.type}
            </Text>
            <Text style={styles.address}>
              **** **** ****{paymentData.cardNumber.slice(14)}
            </Text>
          </View>
          <Image
            source={Assets.check}
            style={{
              width: 25,
              height: 25,
              objectFit: 'contain',
              tintColor: '#Fa4248',
              marginRight: 20,
            }}
          />
        </View>

        <Text
          style={{
            ...styles.address,
            color: '#Fa4248',
            marginTop: 10,
            fontSize: 14,
          }}>
          Change
        </Text>
      </View>
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: '100%',
    height: '100%',
  },
  header: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemWrapper: {
    flex: 1,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  itemImage: {
    height: 110,
    width: 110,
    objectFit: 'contain',
    borderRadius: 10,
    borderColor: '#DDDDDD',
    backgroundColor: '#fff',
    borderWidth: 1,
  },
  name: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'semibold',
  },
  price: {
    fontSize: 16,
    color: '#FA4248',
    fontWeight: 'semibold',
  },
  address: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'semibold',
  },
});
