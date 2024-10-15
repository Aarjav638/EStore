import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';
import Assets from '../../../constants/images';

const SocialLogin = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.or}>- OR -</Text>
      <View style={styles.buttonContainer}>
        <CustomButton
          customStyles={styles.button}
          text="Sign In with Google"
          icon={Assets.google}
          textStyle={styles.buttonTextStyle}
          onPress={() => console.log('pressed')}
        />
        <CustomButton
          customStyles={styles.button}
          text="Sign In with Facebook"
          textStyle={styles.buttonTextStyle}
          icon={Assets.facebook}
          onPress={() => console.log('pressed >>')}
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
    rowGap: 10,
    marginBottom: 20,
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
