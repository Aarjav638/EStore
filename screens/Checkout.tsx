import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Discover/Header';
import Assets from '../constants/images';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CheckoutParam} from '../constants/types';
import ProgressBar from '../components/Checkout/ProgressBar';
import AddressForm from '../components/Checkout/AddressForm';
import CustomButton from '../components/Auth/SignIn/CustomButton';
import Payment from '../components/Checkout/Payment/Payment';

type CheckoutProps = NativeStackScreenProps<CheckoutParam, 'Checkout'>;

const Checkout = ({navigation}: CheckoutProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [billingSameAsDelivery, setBillingSameAsDelivery] = useState(true);
  const [street1, setStreet1] = useState('');
  const [street2, setStreet2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
    console.log('currentStep', currentStep);
    console.log('billingSameAsDelivery', billingSameAsDelivery);
    console.log('street1', street1);
    console.log('street2', street2);
    console.log('city', city);
    console.log('state', state);
    console.log('country', country);
  };

  const previousStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        navigation={navigation}
        text="Checkout"
        Searchasset={Assets.search}
      />
      <ProgressBar currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <View style={styles.contentContainer}>
        {currentStep === 1 && (
          <>
            <View style={styles.checkboxContainer}>
              <TouchableOpacity
                onPress={() =>
                  setBillingSameAsDelivery(!billingSameAsDelivery)
                }>
                <Image
                  source={billingSameAsDelivery ? Assets.check : Assets.oval}
                  style={{
                    width: 24,
                    height: 24,
                    objectFit: 'contain',
                    tintColor: 'red',
                  }}
                />
              </TouchableOpacity>
              <Text style={styles.checkboxText}>
                Billing address is the same as delivery
              </Text>
            </View>
            <AddressForm
              street1={street1}
              setStreet1={setStreet1}
              street2={street2}
              setStreet2={setStreet2}
              city={city}
              setCity={setCity}
              state={state}
              setState={setState}
              country={country}
              setCountry={setCountry}
            />
          </>
        )}
        {currentStep === 2 && <Payment />}
        {currentStep === 3 && (
          <Text style={{color: '#000'}}>Content for Step 3</Text>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          customStyles={{
            ...styles.button,
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: '#FA4248',
          }}
          textStyle={{color: '#000'}}
          text="BACK"
          onPress={previousStep}
        />
        <CustomButton
          customStyles={styles.button}
          text="NEXT"
          onPress={nextStep}
        />
      </View>
    </SafeAreaView>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#000',
  },
  contentContainer: {
    flex: 0.8,
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
