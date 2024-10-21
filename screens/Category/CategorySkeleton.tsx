import {
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Discover/Header';
import Assets from '../../constants/images';

const data = new Array(5).fill(0);

const CategorySkeleton = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header text="Category" Searchasset={Assets.search} />

      <FlatList
        data={data}
        contentContainerStyle={styles.listContainer}
        keyExtractor={(_, index) => index.toString()}
        renderItem={() => (
          <TouchableOpacity style={styles.listItem}>
            <View style={styles.image} />

            <View style={styles.infoContainer}>
              <View style={styles.titleText} />

              <View style={styles.itemCount} />
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default CategorySkeleton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 20,
    rowGap: 18,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: Dimensions.get('window').width / 3,
    height: 110,
    borderRadius: 20,
    backgroundColor: '#808080',
  },
  infoContainer: {
    width: Dimensions.get('window').width / 2,
    height: 110,
    rowGap: 5,
    justifyContent: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 5,
  },
  titleText: {
    backgroundColor: '#e0e0e0',
    height: 16,
    width: '70%',
  },
  arrowButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  itemCount: {
    backgroundColor: '#e0e0e0',
    height: 12,
    width: '30%',
  },
});
