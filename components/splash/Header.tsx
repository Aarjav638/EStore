import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Superstore</Text>

      <View style={styles.sep} />
      <Text style={styles.subTitle}>Fashion</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    height: '10%',
    marginTop: '10%',
  },
  header: {
    fontSize: 36,
    color: 'white',
    fontWeight: 'semibold',
  },
  subTitle: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'medium',
    position: 'relative',
    top: -56,
    textTransform: 'uppercase',
  },
  sep: {
    backgroundColor: 'white',
    height: 54,
    width: 3,
    left: 42,
    top: -40,
    position: 'relative',
  },
});
