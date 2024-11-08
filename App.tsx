import {StatusBar, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import Navigation from './components/Navigation/Navigation';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import * as Sentry from '@sentry/react-native';
import {LogLevel, OneSignal} from 'react-native-onesignal';
import Geolocation from '@react-native-community/geolocation';
import LogRocket from '@logrocket/react-native';
Sentry.init({
  dsn: 'https://35b37c59fabcc9c1e737e47500cf1fe9@o4508255419236352.ingest.us.sentry.io/4508255420547072',
  enableTracing: true,
  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // enableSpotlight: __DEV__,
});

const App = () => {
  
  useEffect(() => {
    LogRocket.init('spy6i7/estore');
    console.log('LogRocket initialized');
  }, []);

  const getGeoLocation = () => {
    try {
      Geolocation.getCurrentPosition(
        position => {
          console.log('lat:',position.coords.latitude,'long:', position.coords.longitude);
        },
        error => {
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true},
      );
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    Geolocation.requestAuthorization(
      getGeoLocation,
      (error: {
        code: number;
        message: string;
        PERMISSION_DENIED: number;
        POSITION_UNAVAILABLE: number;
        TIMEOUT: number;
      }) => {
        console.log(error.code, error.message);
      },
    );
  }, []);

  useEffect(() => {
    OneSignal.Debug.setLogLevel(LogLevel.Verbose);

    OneSignal.initialize('79337893-b987-41db-bdee-07516c730086');

    OneSignal.Notifications.requestPermission(true);

    OneSignal.Notifications.addEventListener('click', event => {
      console.log('OneSignal: notification clicked:', event);
    });
  }, []);

  GoogleSignin.configure({
    webClientId:
      '521444591368-3i3ui4dn7cpiuvnmlvd1nhqbkfjrf8ip.apps.googleusercontent.com',
    forceCodeForRefreshToken: true,
    scopes: ['email', 'profile'],
  });

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <Navigation />
    </View>
  );
};

export default Sentry.wrap(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
