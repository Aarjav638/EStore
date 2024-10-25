import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerParamList} from '../../constants/types';
import CategoryStack from './CategoryStack';
import BottomTabNavigation from '../BottomTabNavigation';
import CustomDrawer from '../CustomDrawer';
import {Image} from 'react-native';
import Assets from '../../constants/images';
// import Products from '../../screens/Products/Products';
import Collection from '../../screens/Collection';
import Catalog from '../../screens/Catalog';
import Wishlist from '../../screens/Wishlist';
import Contact from '../../screens/Contact';

const Drawer = createDrawerNavigator<DrawerParamList>();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStatusBarAnimation: 'slide',
        drawerHideStatusBarOnOpen: true,
        drawerStyle: {
          backgroundColor: 'transparent',
          width: '100%',
          height: '100%',
        },
        drawerItemStyle: {
          backgroundColor: 'transparent',
          marginBottom: '-2%',
          marginStart: '8%',
        },
        drawerLabelStyle: {
          color: 'white',
          fontSize: 14,
          fontWeight: 'thin',
          opacity: 0.8,
        },
      }}>
      <Drawer.Screen
        name="Discover"
        options={{
          drawerLabel: 'Home',
          drawerIcon: () => (
            <Image
              source={Assets.home}
              style={{
                width: 24,
                height: 22,
                marginRight: '-5%',
                tintColor: 'white',
                objectFit: 'contain',
              }}
            />
          ),
        }}
        component={BottomTabNavigation}
      />
      <Drawer.Screen
        name="Catalog"
        options={{
          drawerIcon: () => (
            <Image
              source={Assets.catalog}
              style={{
                width: 24,
                objectFit: 'contain',
                height: 22,
                marginRight: '-5%',
                tintColor: 'white',
              }}
            />
          ),
        }}
        component={Catalog}
      />
      <Drawer.Screen
        name="Category"
        options={{
          drawerIcon: () => (
            <Image
              source={Assets.category}
              style={{
                width: 24,
                height: 22,
                objectFit: 'contain',
                marginRight: '-5%',
                tintColor: 'white',
              }}
            />
          ),
        }}
        component={CategoryStack}
      />
      <Drawer.Screen
        name="Collection"
        options={{
          drawerIcon: () => (
            <Image
              source={Assets.collection}
              style={{
                width: 24,
                height: 22,
                objectFit: 'contain',
                marginRight: '-5%',
                tintColor: 'white',
              }}
            />
          ),
        }}
        component={Collection}
      />
      <Drawer.Screen
        name="Products"
        options={{
          drawerIcon: () => (
            <Image
              source={Assets.products}
              style={{
                width: 24,
                height: 22,
                objectFit: 'contain',
                marginRight: '-5%',
                tintColor: 'white',
              }}
            />
          ),
        }}
        component={Contact}
      />
      <Drawer.Screen
        name="Wishlist"
        options={{
          drawerIcon: () => (
            <Image
              source={Assets.heartUnfilled}
              style={{
                width: 24,
                height: 22,
                objectFit: 'contain',
                marginRight: '-5%',
                tintColor: 'white',
              }}
            />
          ),
        }}
        component={Wishlist}
      />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
