import {StyleSheet} from 'react-native';
import React from 'react';
import {OtpInput} from 'react-native-otp-entry';
const Otp = () => {
  const handleFilledOtp = (text: string) => console.log(text);

  return (
    <OtpInput
      numberOfDigits={5}
      focusColor="#FA4248"
      hideStick={true}
      onTextChange={(text: string) => console.log(text)}
      onFilled={(text: string) => handleFilledOtp(text)}
      theme={{
        containerStyle: styles.container,
        pinCodeContainerStyle: styles.pinCodeContainer,
        // pinCodeTextStyle: styles.pinCodeText,
        // focusStickStyle: styles.focusStick,
        // focusedPinCodeContainerStyle: styles.activePinCodeContainer,
      }}
    />
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 0.1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  pinCodeContainer: {
    borderRadius: 0,
    borderWidth: 0.5,
    backgroundColor: '#fff',
    borderColor: '#DDDDDD',
    width: 52,
    height: 52,
  },
});
