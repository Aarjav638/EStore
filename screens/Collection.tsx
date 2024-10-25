import {Text, View} from 'react-native';
import React from 'react';

const Collection = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
        }}>
        Collection
      </Text>
    </View>
  );
};

export default Collection;
