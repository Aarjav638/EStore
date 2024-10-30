import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Alert, BackHandler, Dimensions, Modal, StyleSheet} from 'react-native';
import Header from '../components/Discover/Header';
import Assets from '../constants/images';
import MenuSection from '../components/Discover/MenuSection';
import Items from '../components/Discover/Items';
import FilterView from '../components/Discover/FilterView';
import {DiscoverStackParams} from '../constants/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Product} from '../constants/types';
import Filter from './Filter';

import {data, menuItems} from '../constants/data';
import { useFocusEffect } from '@react-navigation/native';

type DiscoverProps = NativeStackScreenProps<DiscoverStackParams, 'Home'>;

const Discover = ({navigation,route}: DiscoverProps) => {
  const [selected, setSelected] = useState(0);
  const [filteredData, setFilteredData] = useState<Product[]>(data);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const onBackPress = () => {
      Alert.alert('Exit App', 'Do you want to exit?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    
  }

  useFocusEffect(
    React.useCallback(() => {
      if (route.name === 'Home') {
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
        return () =>
          BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      }
    }, [route.name])
  );
  

  const applyFilters = (filterResult: {
    brands: string[];
    colors: string[];
    ratings: number[];
    price: number[];
  }) => {
    const {brands, colors, ratings, price} = filterResult;

    const filtered = data.filter(item => {
      const brandMatch = brands.length === 0 || brands.includes(item.brand);
      const colorMatch =
        colors.length === 0 || (item.color && colors.includes(item.color));
      const ratingMatch = ratings.length === 0 || ratings.includes(item.rating);
      const priceMatch = item.price >= price[0] && item.price <= price[1];

      return brandMatch && colorMatch && ratingMatch && priceMatch;
    });
    setFilteredData(filtered);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        navigation={navigation}
        text="Discover"
        Searchasset={Assets.search}
      />
      <MenuSection
        menuItems={menuItems}
        setSelected={setSelected}
        selected={selected}
      />
      <Items
        dataLoading={loading}
        data={filteredData}
        selected={selected}
        menuItems={menuItems}
      />
      <FilterView setModalVisible={setModalVisible} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <Filter
          setModalVisible={setModalVisible}
          applyFilters={applyFilters}
          navigation={navigation}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    zIndex: 2,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
  },
});
