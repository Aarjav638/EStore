import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Discover/Header';
import Assets from '../../constants/images';
import Arrow from '../../assets/chevron-right.svg';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CategoryStackParams} from '../../constants/types';
import CategorySkeleton from './CategorySkeleton';
const data = [
  {
    title: 'Collections',
    image: 'https://dummyimage.com/300.png/fff',
    count: 150,
  },
  {
    title: 'Men',
    image: 'https://dummyimage.com/300.png/fff',
    count: 100,
  },
  {
    title: 'Women',
    image: 'https://dummyimage.com/300.png/fff',
    count: 150,
  },
  {
    title: 'Kids Wear',
    image: 'https://dummyimage.com/300.png/fff',
    count: 50,
  },
  {
    title: 'Best Sellers',
    image: 'https://dummyimage.com/300.png/fff',
    count: 100,
  },
];

type CategoryProps = NativeStackScreenProps<CategoryStackParams, 'Category1'>;

const Category = ({navigation}: CategoryProps) => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <CategorySkeleton />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header
        text="Category"
        Searchasset={Assets.search}
        navigation={navigation}
      />
      <FlatList
        data={data}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 20,
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
              navigation.navigate('Category2', {
                title: item.title,
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
                  onPress={() =>
                    navigation.navigate('Category2', {title: item.title})
                  }
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
    </SafeAreaView>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
  },
});
