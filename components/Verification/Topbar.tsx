import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Assets from '../../constants/images';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../constants/types';

type TopbarNavigationProp = NavigationProp<RootStackParamList>;

const Topbar = ({navigation}: {navigation: TopbarNavigationProp}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.backWrapper}
        onPress={() => navigation.goBack()}>
        <Image source={Assets.back} style={styles.Image} />
      </TouchableOpacity>
      <Text style={styles.signUp} onPress={() => navigation.navigate('SignUp')}>
        Sign Up
      </Text>
    </View>
  );
};

export default Topbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 0.08,
    marginTop: '5%',
    width: '100%',
    paddingHorizontal: 28,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backWrapper: {
    height: '100%',
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    height: '50%',
    width: '50%',
    objectFit: 'contain',
  },
  signUp: {
    fontSize: 18,
    fontFamily: 'VarelaRound-Regular',
    color: '#FA4248',
  },
});
