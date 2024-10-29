import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import Navigation from './components/Navigation/Navigation';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


const App = () => {

  GoogleSignin.configure({
    webClientId: '521444591368-3i3ui4dn7cpiuvnmlvd1nhqbkfjrf8ip.apps.googleusercontent.com',
    forceCodeForRefreshToken: true,
    scopes: ['email', 'profile']
  });

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <Navigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
