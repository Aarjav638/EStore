import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Down from '../../assets/downArrow.svg';

interface SectionsProps<T> {
  title: string;

  items: Set<T>;

  selectedItems: T[];

  setSelectedItems: (selectedItems: T[]) => void;

  joinFunction?: (selectedItems: T[]) => string;
}
const Sections = <T,>({
  title,
  items,
  selectedItems,
  joinFunction,
  setSelectedItems,
}: SectionsProps<T>) => {
  const [clicked, setClicked] = useState(false);

  const handlePress = () => {
    setClicked(!clicked);
    startRotation(!clicked ? 1 : 0);
  };

  const handleSectionPress = (Section: T) => {
    if (selectedItems.includes(Section)) {
      setSelectedItems(selectedItems.filter(item => item !== Section));
    } else {
      setSelectedItems([...selectedItems, Section]);
    }
  };

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

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <Text style={styles.title}>{title}</Text>
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
      {clicked &&
        Array.from(items).map((Section, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                color: '#000000',
              }}>
              {String(Section)}
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: selectedItems.includes(Section)
                  ? 'red'
                  : 'white',
                height: 14,
                width: 14,
                margin: 5,
                borderColor: 'red',
                borderWidth: 1,
              }}
              onPress={() => handleSectionPress(Section)}
            />
          </View>
        ))}
      {selectedItems.length > 0 && (
        <Text
          style={{
            paddingHorizontal: 10,
            fontSize: 12,
            color: '#000000',
            opacity: 0.6,
          }}>
          {joinFunction
            ? joinFunction(selectedItems)
            : selectedItems.slice(0, 3).join(', ')}
        </Text>
      )}
    </View>
  );
};

export default Sections;

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
