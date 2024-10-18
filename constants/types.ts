import {ImageSourcePropType} from 'react-native';

export type RootStackParamList = {
  Splash: undefined;
  SignUp: undefined;
  SignIn: undefined;
  Verification: undefined;
  Welcome: undefined;
  bottomNavigator: undefined;
};

export type BottomNavigationList = {
  Cart: undefined;
  Settings: undefined;
  User: undefined;
  Drawer: undefined;
};

export type DrawerParamList = {
  Discover: undefined;
  Categories: undefined;
  Search: undefined;
};

export type DiscoverStackParams = {
  Home: undefined;

  Search: undefined;

  SearchResults: {
    result: string;
  };
  Filter: undefined;
};

export type CategoryStackParams = {
  Category: undefined;
  Category1: {
    title: string;
  };
  Products: undefined;
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
