import {Dimensions, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Splash/Header';
import SocialLogin from '../../components/Auth/SignIn/SocialLogin';
import Modal from '../../components/Auth/SignIn/Modal';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../constants/types';

export type SignInProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const SignIn = ({navigation}: SignInProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <KeyboardAwareScrollView
        contentContainerStyle={{flexGrow: 1}}
        enableOnAndroid={true}
        extraScrollHeight={120}
        keyboardShouldPersistTaps="handled">
        <Header marginTop="6%" />
        <View style={styles.modalWrapper}>
          <Modal navigation={navigation} />
        </View>
        <SocialLogin />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04040466',
    justifyContent: 'space-between',
    height: '100%',
    width: Dimensions.get('window').width,
  },
  modalWrapper: {
    zIndex: 1,
    width: Dimensions.get('window').width,
    height: '32%',
  },
});
