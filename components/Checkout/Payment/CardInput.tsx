import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Assets from '../../../constants/images';

import {CreditCardInput} from 'react-native-credit-card-input';
const CardInput = () => {
  const [cardType, setCardType] = React.useState<string | undefined>('');
  const [check, setCheck] = useState(true);
  const getCardIcon = () => {
    switch (cardType) {
      case 'visa':
        return Assets.visa;
      case 'mastercard':
        return Assets.mastercard;
      case 'american-express':
        return Assets.amex;
      case 'discover':
        return Assets.discover;
      case 'diners-club':
        return Assets.dinners;
      case 'jcb':
        return Assets.jcb;
      case 'unionpay':
        return Assets.unionpay;
      case 'maestro':
        return Assets.maestro;
      default:
        return Assets.credit;
    }
  };
  return (
    <View>
      <View
        style={{
          width: '100%',
          paddingHorizontal: 10,
        }}>
        <Text
          style={{
            color: '#000',
            opacity: 0.5,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            fontSize: 14,
            alignSelf: 'flex-start',
          }}>
          Name On Card
        </Text>
        <TextInput
          cursorColor={'#000'}
          placeholder="John Doe"
          style={{
            color: '#000',
            marginTop: -10,
            borderBottomWidth: 1,
            borderBottomColor: '#DDDDDD',
            width: '100%',
            alignSelf: 'center',
          }}
        />
      </View>
      <CreditCardInput
        labels={{
          number: 'Card Number',
          expiry: 'Expiry',
          cvc: 'CVV/CVc',
        }}
        placeholders={{
          number: '1234 5678 1234 5678',
          expiry: 'MM/YY',
          cvc: 'CVC/CVV',
        }}
        labelStyle={{
          color: '#000',
          opacity: 0.5,
          fontWeight: 'bold',
          textTransform: 'uppercase',
          fontSize: 14,
          alignSelf: 'flex-start',
        }}
        onChange={formData => (
          console.log(formData), setCardType(formData.values.type)
        )}
      />
      <Image
        source={getCardIcon()}
        style={{
          width: 30,
          height: 30,
          position: 'absolute',
          right: 20,
          top: '35%',
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          columnGap: 10,
          marginTop: '10%',
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity onPress={() => setCheck(!check)}>
          <Image
            source={check ? Assets.check : Assets.oval}
            style={{
              width: 20,
              height: 20,
              objectFit: 'contain',
              tintColor: '#FA4248',
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: '#000',
            fontSize: 14,
          }}>
          Save this card details
        </Text>
      </View>
    </View>
  );
};

export default CardInput;
