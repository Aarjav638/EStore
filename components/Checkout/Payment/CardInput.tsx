import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Assets from '../../../constants/images';
import {getCardIcon} from '../../../utils/getCardIcon';
import {
  CreditCardFormData,
  CreditCardInput,
} from 'react-native-credit-card-input';
import {paymentData} from '../../../screens/Checkout';

const CardInput = ({
  setPaymentData,
}: {
  setPaymentData: React.Dispatch<React.SetStateAction<paymentData>>;
}) => {
  const [cardType, setCardType] = React.useState<string | undefined>('');
  const [check, setCheck] = useState(true);
  const [name, setName] = useState('');
  const handleCardData = (data: CreditCardFormData) => {
    console.log(data);
    setPaymentData({
      cardNumber: data.values.number,
      expiryDate: data.values.expiry,
      cvc: data.values.cvc,
      cardHolderName: name,
      type: cardType,
      valid: data.valid,
    });
  };

  return (
    <View style={{marginTop: '12%'}}>
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
          value={name}
          onChangeText={text => setName(text)}
          style={{
            color: '#000',
            fontSize: 16,
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
        inputStyle={{
          color: '#000',
          fontSize: 16,
        }}
        onChange={data => {
          setCardType(data.values.type);
          handleCardData(data);
        }}
      />
      <Image
        source={getCardIcon(cardType)}
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
