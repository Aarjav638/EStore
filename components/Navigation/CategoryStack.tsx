import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CategoryStackParams} from '../../constants/types';
import Category from '../../screens/Category/Category';
import CategoryCollection from '../../screens/CategoryCollection/CategoryCollection';
import Search from '../../screens/Search/Search';
import Products from '../../screens/Products/Products';
import CartStack from './CartStack';

const Stack = createNativeStackNavigator<CategoryStackParams>();

const CategoryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        animationDuration: 300,
      }}>
      <Stack.Screen name="Category1" component={Category} />
      <Stack.Screen name="Category2" component={CategoryCollection} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Cart" component={CartStack} />
    </Stack.Navigator>
  );
};

export default CategoryStack;
