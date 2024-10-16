import {View, Text, StyleSheet, Image, ImageSourcePropType} from 'react-native';
import React from 'react';

const Header = ({
  text,
  Searchasset,
  menuAsset,
  filterAsset,
}: {
  text: string;
  Searchasset?: ImageSourcePropType;
  menuAsset: ImageSourcePropType;
  filterAsset?: ImageSourcePropType;
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={menuAsset}
        style={{...styles.image, tintColor: '#111', height: 28, width: 30}}
      />
      <Text style={styles.text}>{text}</Text>
      <View style={{flexDirection: 'row', columnGap: 8}}>
        {Searchasset && <Image source={Searchasset} style={styles.image} />}
        {filterAsset && <Image source={filterAsset} style={styles.image} />}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: '8%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  image: {
    height: 18,
    width: 18,
    objectFit: 'cover',
    tintColor: '#757575',
  },
  text: {
    fontSize: 24,
    fontWeight: 'medium',
    color: '#FA4248',
  },
});
