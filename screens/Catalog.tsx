import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Catalog = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
        }}>
        Catalog
      </Text>
    </View>
  );
};

export default Catalog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
