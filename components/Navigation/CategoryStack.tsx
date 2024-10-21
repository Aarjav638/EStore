import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CategoryStackParams} from '../../constants/types';
import Category from '../../screens/Category/Category';
import CategoryCollection from '../../screens/CategoryCollection/CategoryCollection';
import Search from '../../screens/Search/Search';

const Stack = createNativeStackNavigator<CategoryStackParams>();

const CategoryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        animationDuration: 300,
      }}>
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Category1" component={CategoryCollection} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export default CategoryStack;
