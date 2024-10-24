import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Discover/Header';
import Assets from '../constants/images';
import CustomButton from '../components/Auth/SignIn/CustomButton';
// import WebView from 'react-native-webview';
import {SafeAreaView} from 'react-native-safe-area-context';
import MapplsGL from 'mappls-map-react-native';
const TrackOrder = () => {
  MapplsGL.setMapSDKKey('386f2ff20a24d854abe3069c6abb76d6');
  MapplsGL.setRestAPIKey('d1c4bc20e6706650ae4c7704faea6f95');
  MapplsGL.setAtlasClientId(
    '96dHZVzsAuvaaOJ5lfB6_G2-dpt_-9BEIkSyGSFAlN_cNUtOL_lIJjNGJBExWfem70TgswNKWEnw1rnGWEEuEVNAwc9lOClA',
  );
  MapplsGL.setAtlasClientSecret(
    'lrFxI-iSEg_rZyNbofv1NEW4eor28ZH9E1VXQdOcwY7anvdC94Tt-ts1n3Qb4WLHyp4J27PZjKsNdA-JaMs9_uDGj7laxZ4MSvsLz2OLqU0=',
  );
  return (
    <SafeAreaView style={styles.container}>
      <Header text="Track Order" Searchasset={Assets.search} />
      <Text style={styles.headerText}>Order No. #123-456</Text>
      <View style={styles.mapContainer}>
        <MapplsGL.MapView
          onMapError={error => console.log(error.code + ' ' + error.message)}
          style={{flex: 1}}>
          <MapplsGL.Camera
            zoomLevel={12}
            centerCoordinate={[37.7749, -122.4194]}
          />
        </MapplsGL.MapView>
      </View>
      <CustomButton
        text="Continue Shopping"
        onPress={() => console.log('Continue')}
        customStyles={{width: '80%'}}
      />
    </SafeAreaView>
  );
};

export default TrackOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: 'red',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
});
