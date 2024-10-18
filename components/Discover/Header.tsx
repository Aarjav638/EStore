import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Assets from '../../constants/images';
import {DrawerActions} from '@react-navigation/native';

const Header = ({
  text,
  Searchasset,
  filterAsset,
  textStyle,
  imageStyle,
  menuIconStyle,
  navigation,
}: {
  text: string;
  Searchasset?: ImageSourcePropType;
  filterAsset?: ImageSourcePropType;
  textStyle?: Record<string, string | number>;
  imageStyle?: Record<string, string | number>;
  menuIconStyle?: Record<string, string | number>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation?: any;
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation?.dispatch(DrawerActions.openDrawer())}>
        <Image
          source={Assets.menu}
          style={{
            ...styles.image,
            tintColor: '#111',
            height: 28,
            width: 30,
            ...menuIconStyle,
          }}
        />
      </TouchableOpacity>
      <Text style={{...styles.text, ...textStyle}}>{text}</Text>
      <View style={{flexDirection: 'row', columnGap: 8}}>
        {Searchasset && (
          <TouchableOpacity
            onPress={() => (
              console.log('search presssed'), navigation?.navigate('Search')
            )}>
            <Image
              source={Searchasset}
              style={{...styles.image, ...imageStyle}}
            />
          </TouchableOpacity>
        )}
        {filterAsset && (
          <TouchableOpacity onPress={() => navigation?.navigate('Filter')}>
            <Image
              source={filterAsset}
              style={{...styles.image, ...imageStyle}}
            />
          </TouchableOpacity>
        )}
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
