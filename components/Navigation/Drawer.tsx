import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DiscoverStack from './DiscoverStack';
import {DrawerParamList} from '../../constants/types';
import CategoryStack from './CategoryStack';

const Drawer = createDrawerNavigator<DrawerParamList>();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStatusBarAnimation: 'slide',
      }}>
      <Drawer.Screen name="Discover" component={DiscoverStack} />
      <Drawer.Screen name="Categories" component={CategoryStack} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
