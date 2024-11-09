import {StatusBar, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import Navigation from './components/Navigation/Navigation';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import * as Sentry from '@sentry/react-native';
import {LogLevel, OneSignal} from 'react-native-onesignal';
import Geolocation from '@react-native-community/geolocation';
import LogRocket from '@logrocket/react-native';
import MapplsGL from 'mappls-map-react-native';
Sentry.init({
  dsn: 'https://35b37c59fabcc9c1e737e47500cf1fe9@o4508255419236352.ingest.us.sentry.io/4508255420547072',
  enableTracing: true,
  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // enableSpotlight: __DEV__,
});
MapplsGL.setMapSDKKey("386f2ff20a24d854abe3069c6abb76d6");
MapplsGL.setRestAPIKey("d1c4bc20e6706650ae4c7704faea6f95");
MapplsGL.setAtlasClientId("96dHZVzsAuvaaOJ5lfB6_G2-dpt_-9BEIkSyGSFAlN_cNUtOL_lIJjNGJBExWfem70TgswNKWEnw1rnGWEEuEVNAwc9lOClA");
MapplsGL.setAtlasClientSecret("lrFxI-iSEg_rZyNbofv1NEW4eor28ZH9E1VXQdOcwY7anvdC94Tt-ts1n3Qb4WLHyp4J27PZjKsNdA-JaMs9_uDGj7laxZ4MSvsLz2OLqU0=");
const App = () => {
  useEffect(() => {
    LogRocket.init('spy6i7/estore');
    console.log('LogRocket initialized');
  }, []);

  

  useEffect(() => {
    Geolocation.requestAuthorization(
      () => {
        console.log('Got location permission:', 'granted');
      },
      (error) => {
        console.log('Error getting location permission:', error);
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
