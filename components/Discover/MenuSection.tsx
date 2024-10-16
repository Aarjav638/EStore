import {View, Text, Dimensions, StyleSheet} from 'react-native';
import React from 'react';

const MenuSection = ({
  setSelected,
  selected,
  menuItems,
}: {
  selected: number;
  menuItems: {name: string; id: number}[];
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <View style={styles.container}>
      {menuItems.map((item, index) => (
        <Text
          key={item.id}
          style={{
            ...styles.text,
            opacity: selected === index ? 1 : 0.4,
            fontSize: selected === index ? 20 : 16,
          }}
          onPress={() => setSelected(item.id)}>
          {item.name}
        </Text>
      ))}
    </View>
  );
};

export default MenuSection;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    height: '4%',
    marginTop: 20,
    width: Dimensions.get('window').width,
  },
  text: {
    fontSize: 16,
    fontWeight: 'medium',
    color: '#111',
  },
});
