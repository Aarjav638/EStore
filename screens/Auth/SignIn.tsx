import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/splash/Header';
import SocialLogin from '../../components/Auth/SignIn/SocialLogin';
import Modal from '../../components/Auth/SignIn/Modal'; // Import Modal component
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const SignIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={{flexGrow: 1}}
        enableOnAndroid={true}
        extraScrollHeight={120}
        keyboardShouldPersistTaps="handled">
        <Header />
        <View style={styles.modalWrapper}>
          <Modal />
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
  },
  modalWrapper: {
    zIndex: 1,
  },
});
