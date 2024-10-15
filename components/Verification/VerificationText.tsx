import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const VerificationText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Verification</Text>
      <Text style={styles.subtext}>
        A 5-Digit PIN has been sent to your email. Enter it below to continue.
      </Text>
    </View>
  );
};

export default VerificationText;

const styles = StyleSheet.create({
  container: {
    width: '60%',
    minHeight: '12%',
    padding: 10,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  subtext: {
    fontSize: 12,
    color: '#474747',
    textAlign: 'center',
    marginTop: 10,
  },
});
