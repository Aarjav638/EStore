import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {paymentMethods} from '../../../constants/data';

const PaymentMethod = ({
  selectedMethod,
  setSelectedMethod,
}: {
  selectedMethod: number;
  setSelectedMethod: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
      }}>
      {paymentMethods.map((method, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor:
                selectedMethod === method.id ? '#FA4248' : '#fff',
              borderColor: '#DCDCDC',
              padding: 10,
              borderWidth: 1,
              height: 60,
              width: 90,
              borderRadius: 25,
            }}
            onPress={() => setSelectedMethod(method.id)}>
            <Image
              source={method.icon}
              style={{
                width: 20,
                height: 20,
                tintColor: selectedMethod === method.id ? '#fff' : '#ddd',
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default PaymentMethod;
