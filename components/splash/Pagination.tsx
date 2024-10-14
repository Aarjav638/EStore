import {StyleSheet, View} from 'react-native';
import React from 'react';

const Pagination = ({
  activeDot,
  DotsLength,
}: {
  activeDot: number;
  DotsLength: number;
}) => {
  const dotStyle = (index: number) => ({
    width: 8,
    height: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: activeDot === index ? 'white' : 'gray',
  });

  return (
    <View style={styles.container}>
      {[...Array(DotsLength)].map((_, index) => (
        <View key={index} style={dotStyle(index)} />
      ))}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    width: '40%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    columnGap: 5,
  },
});
