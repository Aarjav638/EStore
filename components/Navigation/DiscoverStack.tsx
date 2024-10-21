import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import {DiscoverStackParams} from '../../constants/types';
import Search from '../../screens/Search/Search';
import Discover from '../../screens/Discover';
import SearchResults from '../../screens/Search/SearchResults';

const Stack = createNativeStackNavigator<DiscoverStackParams>();

const DiscoverStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Discover} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="SearchResults" component={SearchResults} />
    </Stack.Navigator>
  );
};

export default DiscoverStack;
