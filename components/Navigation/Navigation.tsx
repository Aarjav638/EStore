import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import SignIn from '../../screens/Auth/SignIn';
import SignUp from '../../screens/Auth/SignUp';
import Home from '../../screens/Home';
import Splash from '../../screens/Splash';
import Filter from '../../screens/Filter';
import {RootStackParamList} from '../../constants/types';
import Verification from '../../screens/Auth/Verification';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen
          name="Filter"
          component={Filter}
          options={{
            animation: 'slide_from_bottom',
            presentation: 'fullScreenModal',
          }}
        />
        <Stack.Screen name="Verification" component={Verification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
