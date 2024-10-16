import {ImageSourcePropType} from 'react-native';

export type RootStackParamList = {
  Splash: undefined;
  SignUp: undefined;
  SignIn: undefined;
  Filter: undefined;
  Verification: undefined;
  Welcome: undefined;
  bottomNavigator: undefined;
};

export type BottomNavigationList = {
  Home: undefined;
  Cart: undefined;
  Settings: undefined;
  User: undefined;
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
