import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import CustomButton from './CustomButton';
import Assets from '../../../constants/images';
import {facebookLogin, signIn} from '../../../utils/auth';
import {useAppDispatch} from '../../../redux/hooks';
import {setUserInfo} from '../../../redux/feature/Auth';
import {RootStackParamList} from '../../../constants/types';
import {NavigationProp} from '@react-navigation/native';
import {TRUECALLER_ANDROID_CUSTOMIZATIONS, useTrueCaller} from '../../../utils/useTrueCaller';
type socialProps = NavigationProp<RootStackParamList>;

import {AppEventsLogger} from 'react-native-fbsdk-next';

const SocialLogin = ({navigation}: {navigation: socialProps}) => {
  const dispatch = useAppDispatch();
  const {initializeTruecaller, openTruecallerModal, user} = useTrueCaller({
    androidButtonColor: '#FF0000',
    androidButtonStyle: TRUECALLER_ANDROID_CUSTOMIZATIONS.BUTTON_STYLES.ROUND,
    androidButtonText: TRUECALLER_ANDROID_CUSTOMIZATIONS.BUTTON_TEXTS.CONTINUE,
    androidButtonTextColor: '#FFFFFF',
    androidClientId: 'jjjn2jlevwdyh4imnvtxc2pfrnshswyrhjnrbs5wgym',
    androidConsentHeading:
      TRUECALLER_ANDROID_CUSTOMIZATIONS.CONSENT_HEADING_TEXTS.LOG_IN_TO,
    androidFooterButtonText:
      TRUECALLER_ANDROID_CUSTOMIZATIONS.FOOTER_BUTTON_TEXTS.SKIP,
  });

  const trackSignIN = () => {
    console.log('trackSignIN');
    AppEventsLogger.logEvent(
      AppEventsLogger.AppEvents.CompletedRegistration,
      1,
      {
        [AppEventsLogger.AppEventParams.RegistrationMethod]: 'Facebook',
      },
    );
  };

  useEffect(() => {
    initializeTruecaller();
  }, []);

  const handleTruecallerLogin = async () => {
    try {
      openTruecallerModal();
    } catch (error) {
      console.error('Error signing in:', (error as Error).message);
      Alert.alert(`Sign-in failed: ${(error as Error).message}`);
    }
  };
  console.log(user);

  useEffect(() => {
    console.log(user);
    if (user) {
      console.log(user);
      dispatch(
        setUserInfo({
          idToken: '',
          user: {
            email: user.email,
            name: user.firstName + ' ' + user.lastName,
            mobile: user.mobileNumber,
            photo: user.profilePicture,
          },
        }),
      );
      navigation.navigate('Welcome');
    }
  }, [user]);

  const handleGoogleSignIn = async () => {
    try {
      const response = await signIn();
      dispatch(setUserInfo(response));
      navigation.navigate('Welcome');
    } catch (error) {
      console.error('Error signing in:', (error as Error).message);
      Alert.alert(`Sign-in failed: ${(error as Error).message}`);
    }
  };
  const handleFaceBookSignIN = async () => {
    try {
      const response = await facebookLogin();

      dispatch(setUserInfo(response));
      trackSignIN();
      navigation.navigate('Welcome');
    } catch (error) {
      console.error('Error signing in:', (error as Error).message);
      Alert.alert(`Sign-in failed: ${(error as Error).message}`);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.or}>- OR -</Text>
      <View style={styles.buttonContainer}>
        <CustomButton
          customStyles={styles.button}
          text="Sign In with Truecaller"
          textStyle={styles.buttonTextStyle}
          icon={Assets.truecaller}
          onPress={handleTruecallerLogin}
        />
        <CustomButton
          customStyles={styles.button}
          text="Sign In with Google"
          icon={Assets.google}
          textStyle={styles.buttonTextStyle}
          onPress={handleGoogleSignIn}
        />
        <CustomButton
          customStyles={styles.button}
          text="Sign In with Facebook"
          textStyle={styles.buttonTextStyle}
          icon={Assets.facebook}
          onPress={handleFaceBookSignIN}
        />
      </View>
      <Text style={styles.accountText}>
        Don&apos;t Have an Account?{' '}
        <Text style={styles.subText} onPress={() => console.log('signUp')}>
          SignUp
        </Text>
      </Text>
    </View>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    alignItems: 'center',
    padding: 20,
  },
  or: {
    position: 'relative',
    top: 110,
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#707070',
  },
  buttonContainer: {
    position: 'relative',
    top: 100,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#fff',
    elevation: 5,
    borderColor: 'grey',
    paddingHorizontal: 20,
  },
  buttonTextStyle: {
    color: '#000',
    textTransform: 'capitalize',
    flex: 1,
  },
  accountText: {
    position: 'absolute',
    bottom: 20,
    textAlign: 'center',
    color: '#404040',
    fontSize: 12,
  },
  subText: {
    color: '#E21E1E',
    fontWeight: 'bold',
  },
});
