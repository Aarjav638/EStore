import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {paymentMethods} from '../../../constants/data';
import CardInput from './CardInput';
import PaymentMethod from './PaymentMethod';
import {ScrollView} from 'react-native-gesture-handler';
import {paymentData} from '../../../screens/Checkout';

const Payment = ({
  setPaymentData,
}: {
  setPaymentData: React.Dispatch<React.SetStateAction<paymentData>>;
}) => {
  const [selectedMethod, setSelectedMethod] = React.useState<number>(2);
  return (
    <View style={styles.container}>
      <PaymentMethod
        selectedMethod={selectedMethod}
        setSelectedMethod={setSelectedMethod}
      />
      <ScrollView
        style={{
          marginTop: '10%',
        }}>
        {selectedMethod === 2 && <CardInput setPaymentData={setPaymentData} />}
        {selectedMethod === 1 && (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Image
              source={paymentMethods[0].icon}
              style={{width: 100, height: 100}}
            />
          </View>
        )}
        {selectedMethod === 3 && (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Image
              source={paymentMethods[2].icon}
              style={{width: 100, height: 100}}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
