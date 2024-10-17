import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Dimensions, StyleSheet} from 'react-native';
import Header from '../components/Discover/Header';
import Assets from '../constants/images';
import MenuSection from '../components/Discover/MenuSection';
import Items from '../components/Discover/Items';
import FilterView from '../components/Discover/FilterView';
import {DiscoverStackParams} from '../constants/types';
import {NavigationProp} from '@react-navigation/native';
export const data = [
  {
    name: 'Classic T-Shirt',
    category: 'Men',
    brand: "Levi's",
    price: 25.99,
    rating: 4.5,
    color: 'black',
    image_url: 'https://dummyimage.com/200x200/000/fff&text=Classic+T-Shirt',
  },
  {
    name: 'Classic T-Shirt',
    category: 'Men',
    brand: "Levi's",
    price: 45.99,
    rating: 4.5,
    color: 'black',
    image_url: 'https://dummyimage.com/200x200/000/fff&text=Classic+T-Shirt',
  },
  {
    name: 'Classic T-Shirt',
    category: 'Men',
    brand: "Levi's",
    price: 55.99,
    rating: 4.5,
    color: 'black',
    image_url: 'https://dummyimage.com/200x200/000/fff&text=Classic+T-Shirt',
  },
  {
    name: 'Slim Fit Jeans',
    category: 'Men',
    brand: 'Wrangler',
    price: 45.99,
    rating: 4.3,
    color: 'blue',
    image_url: 'https://dummyimage.com/200x200/000/fff&text=Slim+Fit+Jeans',
  },
  {
    name: 'Floral Dress',
    category: 'Women',
    brand: 'Zara',
    price: 39.99,
    rating: 4.6,
    color: 'floral',
    image_url: 'https://dummyimage.com/200x200/000/fff&text=Floral+Dress',
  },
  {
    name: 'Oversized Hoodie',
    category: 'Best Sellers',
    brand: 'Nike',
    price: 59.99,
    rating: 4.8,
    color: 'black',
    image_url: 'https://dummyimage.com/200x200/000/fff&text=Oversized+Hoodie',
  },
  {
    name: 'Chino Shorts',
    category: 'Men',
    brand: 'Gap',
    price: 29.99,
    rating: 4.2,
    color: 'khaki',
    image_url: 'https://dummyimage.com/200x200/000/fff&text=Chino+Shorts',
  },
  {
    name: 'Silk Blouse',
    category: 'Women',
    brand: 'H&M',
    price: 34.99,
    rating: 4.4,
    color: 'white',
    image_url: 'https://dummyimage.com/200x200/000/fff&text=Silk+Blouse',
  },
  {
    name: 'Running Shoes',
    category: 'Best Sellers',
    brand: 'Adidas',
    price: 89.99,
    rating: 4.9,
    color: 'white',
    image_url: 'https://dummyimage.com/200x200/000/fff&text=Running+Shoes',
  },
  {
    name: 'Polo Shirt',
    category: 'Men',
    brand: 'Ralph Lauren',
    price: 49.99,
    rating: 4.7,
    color: 'blue',
    image_url: 'https://dummyimage.com/200x200/000/fff&text=Polo+Shirt',
  },
  {
    name: 'Denim Jacket',
    category: 'Women',
    brand: "Levi's",
    price: 69.99,
    rating: 4.5,
    color: 'blue',
    image_url: 'https://dummyimage.com/200x200/000/fff&text=Denim+Jacket',
  },
  {
    name: 'Yoga Pants',
    category: 'Best Sellers',
    brand: 'Lululemon',
    price: 79.99,
    rating: 4.8,
    color: 'black',
    image_url: 'https://dummyimage.com/200x200/000/fff&text=Yoga+Pants',
  },
  {
    name: 'Graphic T-Shirt',
    category: 'Men',
    brand: 'Supreme',
    price: 39.99,
    color: 'white',
    rating: 4.6,
    image_url: 'https://dummyimage.com/200x200/000/fff&text=Graphic+T-Shirt',
  },
  {
    name: 'Maxi Skirt',
    category: 'Women',
    brand: 'Free People',
    price: 59.99,
    rating: 4.3,
    color: 'floral',
    image_url: 'https://dummyimage.com/200x200/000/fff&text=Maxi+Skirt',
  },
  {
    name: 'High-Top Sneakers',
    category: 'Best Sellers',
    brand: 'Converse',
    price: 69.99,
    color: 'white',
    rating: 4.7,
    image_url: 'https://dummyimage.com/200x200/000/fff&text=High-Top+Sneakers',
  },
  {
    name: 'Cargo Pants',
    category: 'Men',
    brand: 'Dockers',
    price: 44.99,
    color: 'khaki',
    rating: 4.2,
    image_url: 'https://dummyimage.com/200x200/000/fff&text=Cargo+Pants',
  },
  {
    name: 'Leather Jacket',
    category: 'Women',
    brand: 'Michael Kors',
    price: 129.99,
    rating: 4.6,
    color: 'black',
    image_url: 'https://dummyimage.com/200x200/000/fff&text=Leather+Jacket',
  },
  {
    name: 'Sweatpants',
    category: 'Best Sellers',
    brand: 'Champion',
    price: 34.99,
    color: 'black',
    rating: 4.5,
    image_url: 'https://dummyimage.com/200x200/000/fff&text=Sweatpants',
  },
  {
    name: 'Casual Blazer',
    category: 'Men',
    brand: 'Zara',
    price: 99.99,
    rating: 4.4,
    color: 'black',
    image_url: 'https://dummyimage.com/200x200/000/fff&text=Casual+Blazer',
  },
  {
    name: 'Evening Gown',
    category: 'Women',
    brand: 'Gucci',
    price: 249.99,
    rating: 4.9,
    color: 'red',
    image_url: 'https://dummyimage.com/200x200/000/fff&text=Evening+Gown',
  },
  {
    name: 'Baseball Cap',
    category: 'Best Sellers',
    brand: 'New Era',
    price: 24.99,
    color: 'black',
    rating: 4.7,
    image_url: 'https://dummyimage.com/200x200/000/fff&text=Baseball+Cap',
  },
  {
    name: 'Button-Down Shirt',
    category: 'Men',
    brand: 'Tommy Hilfiger',
    price: 54.99,
    rating: 4.5,
    color: 'blue',
    image_url: 'https://dummyimage.com/200x200/000/fff&text=Button-Down+Shirt',
  },
];
export const menuItems = [
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
  {
    name: 'Best Sellers',
    id: 3,
  },
];

type DiscoverProps = NavigationProp<DiscoverStackParams, 'Home'>;

const Discover = ({navigation}: {navigation: DiscoverProps}) => {
  const [selected, setSelected] = React.useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        navigation={navigation}
        text={'Discover'}
        Searchasset={Assets.search}
      />
      <MenuSection
        menuItems={menuItems}
        setSelected={setSelected}
        selected={selected}
      />
      <Items data={data} selected={selected} menuItems={menuItems} />
      <FilterView navigation={navigation} />
    </SafeAreaView>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
  },
});