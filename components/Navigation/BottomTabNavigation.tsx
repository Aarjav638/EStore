import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../../assets/home.svg';
import CartSvg from '../../assets/cart.svg';
import Gear from '../../assets/Settings.svg';
import Settings from '../../screens/Settings';
import {BottomNavigationList} from '../../constants/types';
import Account from '../../screens/Account';
import CartStack from '../Navigation/CartStack';
import {useAppSelector} from '../../redux/hooks';
import DiscoverStack from './DiscoverStack';

const Tab = createBottomTabNavigator<BottomNavigationList>();
const BottomTabNavigation = () => {
  const cartItems = useAppSelector(state => state.cart.cartItems);
  return (
    <View style={styles.Wrapper}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#FA4248',
          tabBarInactiveTintColor: '#111',
          tabBarShowLabel: false,
          tabBarStyle: styles.container,
          headerShown: false,
        }}>
        <Tab.Screen
          name="DiscoverStack"
          component={DiscoverStack}
          options={{
            tabBarIcon: ({focused, color}) => (
              <View
                style={{
                  flexDirection: 'row',
                  columnGap: 5,
                  alignItems: 'center',
                  flex: 1,
                  marginBottom: 10,
                }}>
                <Home height={20} width={20} color={color} fillOpacity={0.5} />
                <Text style={{color: color, fontSize: 12}}>
                  {focused ? 'Home' : ''}
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartStack}
          options={{
            tabBarIcon: ({focused, color}) => (
              <View
                style={{
                  flexDirection: 'row',
                  columnGap: 5,
                  alignItems: 'center',

                  marginBottom: 10,
                  flex: 1,
                }}>
                <View>
                  <View
                    style={{
                      height: 18,
                      width: 18,
                      position: 'absolute',
                      top: -14,
                      right: 1,
                      borderRadius: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: focused ? '#Fa4248' : 'gray',
                    }}>
                    <Text
                      style={{color: '#fff', fontSize: 12, fontWeight: 'bold'}}>
                      {cartItems.length}
                    </Text>
                  </View>
                  <CartSvg
                    height={20}
                    width={20}
                    stroke={focused ? '#FA4248' : '#bbbb'}
                  />
                </View>
                <Text style={{color: color, fontSize: 12}}>
                  {focused ? 'Cart' : ''}
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="User"
          component={Account}
          options={{
            tabBarIcon: ({focused, color}) => (
              <View
                style={{
                  flexDirection: 'row',
                  columnGap: 5,
                  flex: 1,
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <Image
                  // eslint-disable-next-line @typescript-eslint/no-require-imports
                  source={require('../../assets/people.png')}

                  style={{width: 20, height: 20, tintColor: color}}
                />
                <Text style={{color: color, fontSize: 12}}>
                  {focused ? 'Account' : ''}
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({focused, color}) => (
              <View
                style={{
                  flexDirection: 'row',
                  columnGap: 5,
                  flex: 1,
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <Gear fill={color} height={20} width={20} />
                <Text style={{color: color, fontSize: 12}}>
                  {focused ? 'Settings' : ''}
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    zIndex: 1,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 70,
    padding: 15,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderColor: '#FA4248',
    borderWidth: 1.0,
    borderTopWidth: 1.0,
    marginBottom: '-0.15%',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
});
