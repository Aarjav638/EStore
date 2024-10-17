import {
  Dimensions,
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Discover/Header';
import Assets from '../../constants/images';
import MenuSection from '../../components/Discover/MenuSection';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DiscoverStackParams} from '../../constants/types';
import {data as dummyData} from '../Discover';
const menuItems = [
  {
    name: 'All',
    id: 0,
  },
  {
    name: 'Men',
    id: 1,
  },
  {
    name: 'Women',
    id: 2,
  },
];
export type SearchResultProp = NativeStackScreenProps<
  DiscoverStackParams,
  'SearchResults'
>;
const SearchResults = ({route, navigation}: SearchResultProp) => {
  const data = [1, 1, 1, 1, 1, 1, 1];
  const [selected, setSelected] = React.useState(0);
  const {result} = route.params;

  const filterData = dummyData.filter(item =>
    item.name.toLowerCase().includes(result.toLowerCase()),
  );

  const categoricalData = filterData.filter(item =>
    selected === 0
      ? item.name.toLowerCase().includes(result.toLowerCase())
      : item.category
          .toLowerCase()
          .includes(menuItems[selected].name.toLowerCase()),
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        text="Search"
        Searchasset={Assets.search}
        filterAsset={Assets.filter}
        navigation={navigation}
      />
      <View style={{height: 120}}>
        <FlatList
          data={data}
          keyExtractor={index => index.toString() + Math.random()}
          horizontal={true}
          contentContainerStyle={{paddingHorizontal: 15, columnGap: 15}}
          renderItem={() => (
            <View
              style={{
                width: 120,
                height: 120,
                backgroundColor: '#808080',
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#AFAFAF',
              }}
            />
          )}
        />
      </View>
      <MenuSection
        menuItems={menuItems}
        selected={selected}
        setSelected={setSelected}
      />
      <View
        style={{
          height: Dimensions.get('screen').height * 0.05,
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 30,
          flexDirection: 'row',
          marginVertical: 10,
        }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: '#000000',
          }}>
          Header
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: '#707070',
          }}>
          {categoricalData.length} Results Found
        </Text>
      </View>
      {categoricalData.length > 0 ? (
        <FlatList
          data={categoricalData}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom: 20,
            rowGap: 18,
          }}
          keyExtractor={index => index.toString() + Math.random()}
          renderItem={({item}) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                //   backgroundColor: 'red',
              }}>
              <Image
                style={{
                  width: Dimensions.get('window').width / 3,
                  height: 120,
                  borderRadius: 20,
                  borderWidth: 1,
                }}
                source={{uri: item.image_url}}
              />
              <View
                style={{
                  width: Dimensions.get('window').width / 2,
                  height: 120,
                  flexWrap: 'wrap',
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
                    {item.name}
                  </Text>
                  <Text style={{color: '#FA4248', fontSize: 18}}>
                    ${item.price}
                  </Text>
                </View>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 12,
                    fontWeight: 'light',
                    opacity: 0.5,
                  }}>
                  {item.category}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '20%',
                    alignItems: 'center',
                    paddingVertical: 5,
                    marginTop: 20,
                  }}>
                  <Image
                    source={Assets.basket}
                    style={{height: 15, width: 15, tintColor: '#FA4248'}}
                  />
                  <Image
                    source={Assets.heartUnfilled}
                    style={{height: 15, width: 15, tintColor: '#bebebe'}}
                  />
                </View>
              </View>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text style={{fontSize: 24, color: '#000000', textAlign: 'center'}}>
          No Results Found
        </Text>
      )}
    </SafeAreaView>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
    height: '100%',
  },
});
