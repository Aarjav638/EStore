import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Discover/Header';
import Assets from '../../constants/images';
import SearchBar from '../../components/Search/SearchBar';
import {NavigationProp} from '@react-navigation/native';
import {DiscoverStackParams} from '../../constants/types';
import useDebounce from '../../utils/useDebounce';
import {data} from '../Discover';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Search = ({
  navigation,
}: {
  navigation: NavigationProp<DiscoverStackParams, 'Home'>;
}) => {
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const decounceSearchQuery = useDebounce(searchQuery, 300);

  const searchResults = data.filter(item =>
    decounceSearchQuery.length > 0
      ? item.name.toLowerCase().includes(decounceSearchQuery.toLowerCase())
      : '',
  );

  const recentSearches = [
    'Shoes',
    'Sport wears',
    'Caps',
    'Lady Handbags',
    'Designer',
    'Men',
    'Women',
    'Kids only',
  ];

  const highlightText = (text: string, query: string) => {
    if (!query) {
      return <Text>{text}</Text>;
    }
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return (
      <Text>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <Text
              key={index}
              style={{...styles.text, fontWeight: 'bold', color: '#000'}}>
              {part}
            </Text>
          ) : (
            <Text key={index} style={styles.text}>
              {part}
            </Text>
          ),
        )}
      </Text>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        text={'Search'}
        filterAsset={Assets.filter}
        navigation={navigation}
      />
      <KeyboardAwareScrollView
        contentContainerStyle={{flexGrow: 1}}
        extraScrollHeight={Platform.OS === 'ios' ? 80 : 60}
        style={{flex: 1}}>
        <View style={styles.searchBar}>
          <SearchBar
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
          />
        </View>

        <View style={styles.flatlist}>
          {searchResults.length > 0 &&
            searchResults.slice(0, 4).map((item, index) => (
              <TouchableOpacity key={item.name + index}>
                <Text
                  onPress={() =>
                    navigation.navigate('SearchResults', {result: item.name})
                  }>
                  {highlightText(item.name, decounceSearchQuery)}
                </Text>
              </TouchableOpacity>
            ))}
        </View>
        <View style={styles.recentSearches}>
          <Text style={styles.recentText}>Recent Searches</Text>
          <View style={styles.itemWrapper}>
            {recentSearches.map((item, index) => (
              <TouchableOpacity
                key={item + index}
                style={{
                  width: 'auto',
                  height: 'auto',
                  padding: 14,
                  borderRadius: 20,
                  backgroundColor: '#00000008',
                }}
                onPress={() => console.log('recent search pressed', item)}>
                <Text>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
    height: '100%',
  },
  searchBar: {
    width: '100%',
    height: Dimensions.get('screen').height * 0.06,
    marginTop: 20,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatlist: {
    width: '100%',
    height: Dimensions.get('screen').height * 0.18,
    justifyContent: 'flex-start',
    marginTop: 20,
    paddingHorizontal: 40,
    rowGap: 10,
  },
  text: {
    fontSize: 18,
    color: '#BEBEBE',
  },
  recentSearches: {
    width: '100%',
    height: Dimensions.get('screen').height * 0.55,
    justifyContent: 'flex-start',
    paddingHorizontal: 40,
  },
  recentText: {
    fontSize: 14,
    color: '#BEBEBE',
  },
  itemWrapper: {
    width: '100%',
    marginTop: 20,
    height: '50%',
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
});
