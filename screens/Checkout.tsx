import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
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
import Summary from '../components/Checkout/Summary/Summary';
import {AppEventsLogger} from 'react-native-fbsdk-next';

type CheckoutProps = NativeStackScreenProps<CheckoutParam, 'Checkout'>;

export type paymentData = {
  cardNumber: string;
  expiryDate: string;
  cvc: string;
  cardHolderName: string;
  type?: string;
  valid: boolean;
};

export type Address = {
  street1: string;
  street2: string;
  city: string;
  state: string;
  country: string;
};

const Checkout = ({navigation}: CheckoutProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [billingSameAsDelivery, setBillingSameAsDelivery] = useState(true);
  const [street1, setStreet1] = useState('');
  const [street2, setStreet2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');

  const addressData: Address = {
    street1: street1,
    street2: street2,
    city: city,
    state: state,
    country: country,
  };

  const [paymentData, setPaymentData] = useState<paymentData>({
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    cardHolderName: '',
    type: '',
    valid: false,
  });
  const nextStep = () => {
    if (currentStep === 1) {
      if (
        addressData.street1 === '' ||
        addressData.city === '' ||
        addressData.state === '' ||
        addressData.country === ''
      ) {
        Alert.alert('Please fill all the fields');
      } else {
        setCurrentStep(currentStep + 1);
      }
    }
    if (currentStep === 2) {
      if (!paymentData.valid) {
        Alert.alert('Please enter a valid card');
      } else {
        setCurrentStep(currentStep + 1);
      }
    }
    if (currentStep === 3) {
      AppEventsLogger.logEvent(AppEventsLogger.AppEvents.AddedPaymentInfo, {
        [AppEventsLogger.AppEventParams.PaymentInfoAvailable]: 'true',
      });
      navigation.navigate('trackOrder');
    }
  };

  const previousStep = () => {
    if (currentStep == 2) {
      setCurrentStep(currentStep - 1);
      setCity('');
      setState('');
      setCountry('');
      setStreet1('');
      setStreet2('');
    } else if (currentStep == 3) {
      setCurrentStep(currentStep - 1);
      setPaymentData({
        cardNumber: '',
        expiryDate: '',
        cvc: '',
        cardHolderName: '',
        type: '',
        valid: false,
      });
    } else navigation.goBack();
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
        {currentStep === 2 && <Payment setPaymentData={setPaymentData} />}
        {currentStep === 3 && (
          <Summary paymentData={paymentData} addressData={addressData} />
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
          text={currentStep === 3 ? 'PAY' : 'NEXT'}
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
    flex: 1,
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    height: Dimensions.get('window').height * 0.065,
    justifyContent: 'space-between',
    marginBottom: 20,
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
