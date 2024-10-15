import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import Navigation from './components/Navigation/Navigation';

const App = () => {
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
