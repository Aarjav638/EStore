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
import {NavigationProp} from '@react-navigation/native';
import {DiscoverStackParams} from '../../constants/types';

const Header = ({
  text,
  Searchasset,
  filterAsset,
  navigation,
}: {
  text: string;
  Searchasset?: ImageSourcePropType;
  filterAsset?: ImageSourcePropType;
  navigation?:
    | NavigationProp<DiscoverStackParams, 'Home'>
    | NavigationProp<DiscoverStackParams, 'SearchResults'>;
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={Assets.menu}
        style={{...styles.image, tintColor: '#111', height: 28, width: 30}}
      />
      <Text style={styles.text}>{text}</Text>
      <View style={{flexDirection: 'row', columnGap: 8}}>
        {Searchasset && (
          <TouchableOpacity
            onPress={() => (
              console.log('search presssed'), navigation?.navigate('Search')
            )}>
            <Image source={Searchasset} style={styles.image} />
          </TouchableOpacity>
        )}
        {filterAsset && (
          <TouchableOpacity onPress={() => navigation?.navigate('Filter')}>
            <Image source={filterAsset} style={styles.image} />
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
