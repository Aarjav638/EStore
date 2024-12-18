import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import {CheckoutParam} from '../../constants/types';
import Search from '../../screens/Search/Search';
import Cart from '../../screens/Cart';
import Checkout from '../../screens/Checkout';
import TrackOrder from '../../screens/TrackOrder';
import TrackingOrderMap from '../../screens/TrackingOrderMap';

const Stack = createNativeStackNavigator<CheckoutParam>();

const CartStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        headerShown: false,
      }}>
      <Stack.Screen name="cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="trackOrder" component={TrackOrder} />
      <Stack.Screen name="TrackingOrderMap" component={TrackingOrderMap} />
    </Stack.Navigator>
  );
};

export default CartStack;
