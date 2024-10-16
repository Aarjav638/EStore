import {Animated, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Down from '../../assets/downArrow.svg';
const ShippedFrom = () => {
  const [clicked, setClicked] = useState(false);
  const [rotateAnimation] = useState(new Animated.Value(0));
  const rotate = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-180deg'],
  });
  const startRotation = (toValue: number) => {
    Animated.timing(rotateAnimation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handlePress = () => {
    setClicked(!clicked);
    startRotation(!clicked ? 1 : 0);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <Text style={styles.title}>Shipped From</Text>
        <Animated.View
          style={{
            height: 20,
            width: 20,
            alignItems: 'center',
            justifyContent: 'center',
            transform: [{rotate: rotate}],
          }}>
          <Down onPress={handlePress} height={14} width={14} />
        </Animated.View>
      </View>
      <Text
        style={{
          paddingHorizontal: 10,
          color: '#000000',
          opacity: 0.6,
          fontSize: 12,
        }}>
        No Setting
      </Text>
    </View>
  );
};

export default ShippedFrom;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
});
