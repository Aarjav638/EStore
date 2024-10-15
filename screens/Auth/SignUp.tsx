import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Text} from 'react-native-svg';
const SignUp = () => {
  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
