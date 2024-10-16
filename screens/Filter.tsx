import {StyleSheet, Dimensions, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import PrinceRange from '../components/Filter/PrinceRange';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Discover/Header';
import Assets from '../constants/images';
import MenuSection from '../components/Discover/MenuSection';
import {data, menuItems} from './Discover';
import Popularity from '../components/Filter/Popularity';
import ShippedFrom from '../components/Filter/ShippedFrom';
import Sections from '../components/Filter/Section';
import CustomButton from '../components/Auth/SignIn/CustomButton';

const brands = new Set<string>();
data.forEach(item => {
  brands.add(item.brand);
});

const colors = new Set<string>();
data.forEach(item => {
  colors.add(item.color);
});

const ratings = new Set<number>();
data.forEach(item => {
  ratings.add(item.rating);
});

function joinRatings(selectedRatings: number[]) {
  if (selectedRatings.length === 0) return '';
  if (selectedRatings.length === 1) return `${selectedRatings[0]} star`;
  if (selectedRatings.length === 2)
    return `${selectedRatings[0]} star and ${selectedRatings[1]} star`;

  return `${selectedRatings.slice(0, 3).join(' star, ')} star`;
}

const Filter = () => {
  const [selected, setSelected] = useState(0);
  const [values, setValues] = useState([120, 1200]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  return (
    <SafeAreaView style={styles.container}>
      <Header text="Filter" Searchasset={Assets.search} />
      <MenuSection
        menuItems={menuItems}
        selected={selected}
        setSelected={setSelected}
      />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          width: '100%',
          paddingHorizontal: 20,
          paddingBottom: '10%',
          alignItems: 'center',
          rowGap: 40,
        }}
        style={{flex: 1, marginTop: '4%'}}>
        <Popularity />
        <Sections<string>
          title="Brands"
          items={brands}
          selectedItems={selectedBrands}
          setSelectedItems={setSelectedBrands}
        />
        <PrinceRange values={values} setValues={setValues} />
        <Sections<string>
          title="Colors"
          items={colors}
          selectedItems={selectedColors}
          setSelectedItems={setSelectedColors}
        />
        <Sections<number>
          title="Ratings"
          items={ratings}
          selectedItems={selectedRatings}
          setSelectedItems={setSelectedRatings}
          joinFunction={joinRatings}
        />
        <ShippedFrom />
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginBottom: '15%',
          width: '100%',
          alignSelf: 'center',
        }}>
        <CustomButton
          customStyles={{
            width: '40%',
            backgroundColor: '#fff',
            borderColor: '#FA4248',
            borderWidth: 1,
          }}
          textStyle={{
            color: '#000',
          }}
          text="Clear"
          onPress={() => console.log('pressed')}
        />
        <CustomButton
          customStyles={{
            width: '40%',
          }}
          text="Apply"
          onPress={() => console.log('pressed')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Filter;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: '100%',
    backgroundColor: '#fff',
  },
});
