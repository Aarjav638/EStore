import {Dimensions, Image, StatusBar, StyleSheet, Text} from 'react-native';
import React from 'react';
import Assets from '../../constants/images';
import Header from '../../components/Splash/Header';
import Topbar from '../../components/Verification/Topbar';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../constants/types';
import VerificationText from '../../components/Verification/VerificationText';
import Otp from '../../components/Verification/Otp';
import CustomButton from '../../components/Auth/SignIn/CustomButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useAppDispatch} from '../../redux/hooks';
import {setUserInfo} from '../../redux/feature/Auth';

type VerificationProps = NativeStackScreenProps<
  RootStackParamList,
  'Verification'
>;

const Verification = ({navigation}: VerificationProps) => {
  const dispatch = useAppDispatch();

  const handleGuestLogin = () => {
    dispatch(
      setUserInfo({
        user: {
          name: 'Guest',
        },
      }),
    );
    navigation.navigate('Welcome');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAwareScrollView
        contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
        <Topbar navigation={navigation} text="Sign Up" />
        <Header color="#151515" />
        <Image source={Assets.questionMark} style={styles.Image} />
        <VerificationText />
        <Otp />
        <CustomButton onPress={handleGuestLogin} text="Continue" />
        <Text style={styles.accountText}>
          Don&apos;t Have an Account?{' '}
          <Text style={styles.subText} onPress={() => console.log('signUp')}>
            SignUp
          </Text>
        </Text>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: Dimensions.get('window').width,
    backgroundColor: '#F3F2F2',
  },
  Image: {
    height: '20%',
    width: '60%',
    resizeMode: 'contain',
  },

  accountText: {
    marginTop: 10,
    textAlign: 'center',
    position: 'absolute',
    bottom: 20,
    color: '#404040',
    fontSize: 12,
  },
  subText: {
    color: '#E21E1E',
    fontWeight: 'bold',
  },
});
