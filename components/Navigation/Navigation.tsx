import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import SignIn from '../../screens/Auth/SignIn';
import SignUp from '../../screens/Auth/SignUp';
import Splash from '../../screens/Splash';
import {RootStackParamList} from '../../constants/types';
import Verification from '../../screens/Auth/Verification';
import Welcome from '../../screens/Welcome';
import MyDrawer from './Drawer';
import {Provider} from 'react-redux';
import {store} from '../../redux/store';
import {Text} from 'react-native';
import * as Sentry from '@sentry/react-native';

const navigationIntegration = Sentry.reactNavigationIntegration({
  enableTimeToInitialDisplay: true,
});

Sentry.init({
  dsn: 'https://35b37c59fabcc9c1e737e47500cf1fe9@o4508255419236352.ingest.us.sentry.io/4508255420547072',
  // integrations: [navigationIntegration],
  enableTracing: true,
});
const Stack = createNativeStackNavigator<RootStackParamList>();
const linking = {
  prefixes: ['estore://', 'https://estore.com/', 'http://estore.com/'],
  config: {
    screens: {
      Drawer: {
        path: 'drawer',
        screens: {
          Discover: 'discover',
          Category: {
            path: 'category',
            screens: {
              Category2: 'collection/:title',
              Products: 'products/:id',
            },
          },
        },
      },
    },
  },
};
const Navigation = () => {
  const containerRef =
    React.useRef<NavigationContainerRef<RootStackParamList> | null>(null);

  return (
    <Provider store={store}>
      <NavigationContainer
        ref={containerRef}
        onReady={() => {
          navigationIntegration.registerNavigationContainer(containerRef);
        }}
        linking={linking}
        fallback={<Text> Loading.... </Text>}>
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
