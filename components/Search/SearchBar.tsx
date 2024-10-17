import {Image, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import Assets from '../../constants/images';

const SearchBar = ({
  setSearchQuery,
  searchQuery,
}: {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
}) => {
  return (
    <View style={styles.container}>
      <Image source={Assets.search} style={{height: 15, width: 15}} />
      <TextInput
        placeholder="Search"
        style={styles.textInput}
        onChangeText={text => setSearchQuery(text)}
        value={searchQuery}
        placeholderTextColor={'#00000080'}
      />
      <Image source={Assets.filter} style={{height: 15, width: 15}} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    borderRadius: 50,
    width: '85%',
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: '#00000008',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    height: '100%',
    fontSize: 18,
    color: '#000',
  },
});
