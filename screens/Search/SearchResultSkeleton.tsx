import {Dimensions, FlatList, StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Discover/Header';
import Assets from '../../constants/images';
import MenuSection from '../../components/Discover/MenuSection';
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

const data = new Array(10).fill(0);
const SearchResultsSkeleton = () => {
  const [selected, setSelected] = React.useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        text="Search"
        Searchasset={Assets.search}
        filterAsset={Assets.filter}
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
          Results Found
        </Text>
      </View>

      <FlatList
        data={data}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 20,
          rowGap: 18,
        }}
        keyExtractor={index => index.toString() + Math.random()}
        renderItem={() => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: Dimensions.get('window').width / 3,
                height: 120,
                borderRadius: 20,
                backgroundColor: '#e0e0e0',
              }}
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
                <View
                  style={{backgroundColor: '#e0e0e0', height: 16, width: '60%'}}
                />
                <View
                  style={{backgroundColor: '#e0e0e0', height: 18, width: '20%'}}
                />
              </View>
              <View
                style={{
                  backgroundColor: '#e0e0e0',
                  height: 12,
                  width: '20%',
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '20%',
                  alignItems: 'center',
                  paddingVertical: 5,
                  marginTop: 20,
                }}>
                <View
                  style={{
                    backgroundColor: '#e0e0e0',
                    height: 16,
                    width: '100%',
                  }}
                />
              </View>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default SearchResultsSkeleton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
    height: '100%',
  },
});
