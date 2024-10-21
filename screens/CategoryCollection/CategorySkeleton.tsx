import {
  Dimensions,
  FlatList,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Header from '../../components/Discover/Header';
import Assets from '../../constants/images';
import {SafeAreaView} from 'react-native-safe-area-context';

const data = new Array(8).fill(0);
const CategorySkeleton = ({title}: {title: string}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        text={title}
        menuIconStyle={{tintColor: 'white'}}
        imageStyle={{tintColor: '#dbdbdb', opacity: 1}}
        Searchasset={Assets.search}
        textStyle={{color: 'white'}}
      />

      <View style={styles.offerView}>
        <View style={styles.skeletonOfferText} />
        <View style={styles.skeletonCollectionText} />
      </View>
      <View style={styles.listWrapper}>
        <FlatList
          data={data}
          keyExtractor={(_, index) => index.toString()}
          renderItem={() => (
            <TouchableOpacity style={styles.itemContainer}>
              <View style={styles.skeletonImage} />
              <View style={styles.itemContent}>
                <View style={styles.skeletonItemTitle} />
                <View style={styles.skeletonItemCount} />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

// export default CategoryCollectionSkeleton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04040494',
    width: Dimensions.get('window').width,
    height: '100%',
  },
  header: {
    padding: 20,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  listWrapper: {
    padding: 20,
    marginTop: '-10%',
    flex: 1,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    backgroundColor: 'white',
  },
  skeletonHeaderText: {
    width: '60%',
    height: 30,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
  offerView: {
    width: '100%',
    justifyContent: 'center',
    marginTop: 20,
    padding: 20,
    height: Dimensions.get('window').height / 3,
  },
  skeletonOfferText: {
    width: '40%',
    height: 24,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    marginBottom: 10,
  },
  skeletonCollectionText: {
    width: '70%',
    height: 36,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  skeletonImage: {
    width: Dimensions.get('window').width / 3,
    height: 110,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginRight: 20,
  },
  itemContent: {
    justifyContent: 'center',
    flex: 1,
  },
  skeletonItemTitle: {
    width: '80%',
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    marginBottom: 10,
  },
  skeletonItemCount: {
    width: '40%',
    height: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
});

export default CategorySkeleton;
