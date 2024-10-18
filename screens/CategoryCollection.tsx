import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CategoryStackParams} from '../constants/types';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Discover/Header';
import Assets from '../constants/images';

type CategoryCollectionProps = NativeStackScreenProps<
  CategoryStackParams,
  'Category1'
>;

const CategoryCollection = ({route, navigation}: CategoryCollectionProps) => {
  const {title} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Header
        text={title}
        navigation={navigation}
        menuIconStyle={{tintColor: 'white'}}
        imageStyle={{tintColor: '#757575'}}
        Searchasset={Assets.search}
        textStyle={styles.headerText}
      />
      <View></View>
      <Text>{title}</Text>
    </SafeAreaView>
  );
};

export default CategoryCollection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04040494',
  },
  headerText: {
    color: 'white',
  },
});
