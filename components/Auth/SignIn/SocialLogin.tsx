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
          styles={styles.button}
          text="Sign In with Google"
          icon={Assets.google}
          textStyle={styles.buttonTextStyle}
          onPress={() => console.log('pressed')}
        />
        <CustomButton
          styles={styles.button}
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
  },
  or: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#707070',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    rowGap: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    elevation: 5,
    borderColor: 'grey',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonTextStyle: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
    flex: 1,
  },
  accountText: {
    marginTop: 10,
    textAlign: 'center',
    color: '#404040',
  },
  subText: {
    color: '#E21E1E',
    fontWeight: 'bold',
  },
});
