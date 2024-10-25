/* eslint-disable @typescript-eslint/no-explicit-any */
import {ImageSourcePropType} from 'react-native';
import {CartProps} from '../screens/Cart';

export type RootStackParamList = {
  Splash: undefined;
  SignUp: undefined;
  SignIn: undefined;
  Verification: undefined;
  Welcome: undefined;
  Drawer: undefined;
};

export type BottomNavigationList = {
  Cart: undefined;
  Settings: undefined;
  User: undefined;
  DiscoverStack: undefined;
};

export type DrawerParamList = {
  Discover: undefined;
  Search: undefined;
  Catalog: undefined;
  Products: undefined;
  Collection: undefined;
  Category: undefined;
  Wishlist: undefined;
};

export type DiscoverStackParams = {
  Home: undefined;

  Search: undefined;

  SearchResults: {
    result: string;
  };
};

export type CheckoutParam = {
  Checkout: {
    CartItems: CartProps[];
  };
  cart: undefined;
  trackOrder: undefined;
  Search: undefined;
};

export type CategoryStackParams = {
  Category: undefined;
  Category1: {
    title: string;
  };
  Products: {
    title: string;
  };
  Search: undefined;
};

export type Images = {
  google: ImageSourcePropType;
  facebook: ImageSourcePropType;
  questionMark: ImageSourcePropType;
  back: ImageSourcePropType;
  avatar: ImageSourcePropType;
  menu: ImageSourcePropType;
  search: ImageSourcePropType;
  filter: ImageSourcePropType;
  heart: ImageSourcePropType;
  heartUnfilled: ImageSourcePropType;
  basket: ImageSourcePropType;
  star: ImageSourcePropType;
  sunglasses: ImageSourcePropType;
  whiteDress: ImageSourcePropType;
  redDress: ImageSourcePropType;
  bin: ImageSourcePropType;
  check: ImageSourcePropType;
  oval: ImageSourcePropType;
  wallet: ImageSourcePropType;
  card: ImageSourcePropType;
  paypal: ImageSourcePropType;
  credit: ImageSourcePropType;
  amex: ImageSourcePropType;
  visa: ImageSourcePropType;
  mastercard: ImageSourcePropType;
  discover: ImageSourcePropType;
  jcb: ImageSourcePropType;
  dinners: ImageSourcePropType;
  unionpay: ImageSourcePropType;
  maestro: ImageSourcePropType;
  trackOrder: ImageSourcePropType;
  home: ImageSourcePropType;
  catalog: ImageSourcePropType;
  category: ImageSourcePropType;
  collection: ImageSourcePropType;
  products: ImageSourcePropType;
  gps: ImageSourcePropType;
};

export type Item = {
  name: string;
  category: string;
  color?: string;
  brand: string;
  price: number;
  rating: number;
  image_url: string;
};
