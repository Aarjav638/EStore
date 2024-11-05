import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Discover/Header';
import Assets from '../constants/images';
import CustomButton from '../components/Auth/SignIn/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {AppEventsLogger} from 'react-native-fbsdk-next';

const TrackOrder = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Track the event that the user has placed an order
    AppEventsLogger.logPurchase(4500, 'INR', {
      order_id: '123-456',
      product_name: 'Gucci Sunglasses',
      product_category: 'Sunglasses',
      product_id: 1,
    });
    AppEventsLogger.logEvent('Order Placed', 1, {
      order_id: '123-456',
      product_name: 'Gucci Sunglasses',
      product_category: 'Sunglasses',
      product_id: 1,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header text="Checkout" Searchasset={Assets.search} />
      <Image
        source={Assets.trackOrder}
        style={{
          width: '80%',
          height: '50%',
          alignSelf: 'center',
          resizeMode: 'contain',
        }}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 24, fontWeight: 'bold', color: '#000'}}>
          Order Accepted
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#777',
            marginTop: 10,
            width: '50%',
            textAlign: 'center',
          }}>
          Your Order No. #123-456 has been placed
        </Text>
      </View>
      <CustomButton
        text="Track Order"
        onPress={() => navigation.navigate('Products')}
        customStyles={{
          width: '80%',
          alignSelf: 'center',
          marginTop: '20%',
        }}
      />
    </SafeAreaView>
  );
};

export default TrackOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
    height: '100%',
  },
});
