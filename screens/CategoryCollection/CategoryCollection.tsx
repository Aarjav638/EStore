import {
  Dimensions,
  FlatList,
  Image,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CategoryStackParams} from '../../constants/types';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Discover/Header';
import Assets from '../../constants/images';
import Arrow from '../../assets/chevron-right.svg';
import CategorySkeleton from './CategorySkeleton';
export type CategoryCollectionProps = NativeStackScreenProps<
  CategoryStackParams,
  'Category2'
>;
const data = [
  {
    title: 'Collections',
    image: 'https://dummyimage.com/300.png/fff',
    count: 150,
  },
  {
    title: 'Coats',
    image: 'https://dummyimage.com/300.png/fff',
    count: 100,
  },
  {
    title: 'Dresses',
    image: 'https://dummyimage.com/300.png/fff',
    count: 150,
  },
  {
    title: 'Jackets',
    image: 'https://dummyimage.com/300.png/fff',
    count: 50,
  },
  {
    title: 'Jeans',
    image: 'https://dummyimage.com/300.png/fff',
    count: 100,
  },
  {
    title: 'Jumpers',
    image: 'https://dummyimage.com/300.png/fff',
    count: 100,
  },
  {
    title: 'Shirts',
    image: 'https://dummyimage.com/300.png/fff',
    count: 100,
  },
  {
    title: 'Shoes',
    image: 'https://dummyimage.com/300.png/fff',
    count: 100,
  },
];

const CategoryCollection = ({route, navigation}: CategoryCollectionProps) => {
  const title = route.params?.title ?? 'Collection';

  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <CategorySkeleton title={title} />;
  }

  console.log('CategoryCollection', title);

  const handleShare = async () => {
    try {
      const deepLink = `https://estore.com/drawer/category/collection/${title}`;
      const result = await Share.share({
        message: deepLink,
        title: 'Share this collection',
      });
      console.log('Result', result);
    } catch (error) {
      console.log('Error in sharing', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        text={title}
        navigation={navigation}
        menuIconStyle={{tintColor: 'white'}}
        imageStyle={{tintColor: '#000', opacity: 0.3}}
        Searchasset={Assets.search}
        textStyle={{color: 'white'}}
      />
      <View style={styles.offerView}>
        <TouchableOpacity
          onPress={handleShare}
          style={{
            alignSelf: 'flex-end',
            padding: 10,
          }}>
          <Image
            source={Assets.share}
            style={{width: 20, height: 20, tintColor: 'white'}}
          />
        </TouchableOpacity>
        <Text style={styles.offerText}>Up to 20% Off</Text>
        <Text style={styles.headerText}>{title} Collection</Text>
      </View>
      <View style={styles.listWrapper}>
        <FlatList
          data={data}
          contentContainerStyle={{
            rowGap: 18,
          }}
          keyExtractor={(item, index) => index.toString() + item}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
              onPress={() =>
                navigation.navigate('Products', {
                  title: title,
                  id: 1,
                })
              }>
              <Image
                style={{
                  width: Dimensions.get('window').width / 3,
                  height: 110,
                  borderRadius: 20,
                  tintColor: '#808080',
                  borderWidth: 1,
                }}
                source={{uri: item.image}}
              />
              <View
                style={{
                  width: Dimensions.get('window').width / 2,
                  height: 110,
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    alignItems: 'center',
                    paddingVertical: 5,
                  }}>
                  <Text style={{color: '#000000', fontSize: 16}}>
                    {item.title}
                  </Text>
                  <TouchableOpacity
                    onPress={() => console.log('Arrow pressed')}
                    style={{
                      width: 40,
                      height: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 5,
                    }}>
                    <Arrow
                      fill={'#000'}
                      height={12}
                      width={12}
                      strokeWidth={1.5}
                      stroke={'#000'}
                    />
                  </TouchableOpacity>
                </View>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 12,
                    fontWeight: 'light',
                    opacity: 0.5,
                  }}>
                  {item.count}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default CategoryCollection;

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
  offerText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'medium',
    opacity: 0.5,
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  offerView: {
    width: '100%',
    justifyContent: 'center',
    marginTop: 20,
    padding: 20,
    height: Dimensions.get('window').height / 3,
  },
  listWrapper: {
    padding: 20,
    marginTop: '-10%',
    flex: 1,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    backgroundColor: 'white',
  },
});
