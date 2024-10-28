import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import SignIn from '../../screens/Auth/SignIn';
import SignUp from '../../screens/Auth/SignUp';
import Splash from '../../screens/Splash';
import {RootStackParamList} from '../../constants/types';
import Verification from '../../screens/Auth/Verification';
import Welcome from '../../screens/Welcome';
import MyDrawer from './Drawer';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Drawer" component={MyDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default Navigation;
