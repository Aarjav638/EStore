import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Discover/Header';
import Assets from '../constants/images';
import CustomButton from '../components/Auth/SignIn/CustomButton';

const TrackOrder = () => {
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
        onPress={() => console.log('Track Order')}
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
