import {DimensionValue, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = ({
  color = 'white',
  marginTop,
}: {
  color?: string;
  marginTop?: DimensionValue;
}) => {
  return (
    <View
      style={{
        ...styles.headerContainer,
        marginTop: marginTop,
      }}>
      <Text style={{...styles.header, color: color}}>Superstore</Text>

      <View style={{...styles.sep, backgroundColor: color}} />
      <Text style={{...styles.subTitle, color: color}}>Fashion</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    height: '14%',
  },
  header: {
    fontSize: 36,
    fontWeight: 'semibold',
  },
  subTitle: {
    fontSize: 14,
    fontWeight: 'medium',
    position: 'relative',
    top: -56,
    opacity: 0.5,
    textTransform: 'uppercase',
  },
  sep: {
    height: 54,
    width: 3,
    left: 42,
    top: -40,
    position: 'relative',
  },
});
