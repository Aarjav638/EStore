import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Geolocation from '@react-native-community/geolocation';
import Header from '../components/Discover/Header';
import Assets from '../constants/images';
import CustomButton from '../components/Auth/SignIn/CustomButton';
import MapplsGL from 'mappls-map-react-native';
// import LottieView from "lottie-react-native";
import { SafeAreaView } from 'react-native-safe-area-context';


const TrackingOrderMap = () => {
    const [location, setLocation] = useState<[number, number] | null>(null);
  const cameraRef = useRef<MapplsGL.Camera>(null);
  const START_COORDINATE: [number, number][] = [[76.984480, 29.691969], [77.202660, 29.456141]];
  
  
  const [routeCoordinates,setRouteCoordinates] = useState<[number,number][]|null>(START_COORDINATE);



  useEffect(() => {

    const watchId = Geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation([longitude, latitude]);
        console.log('Got position:', latitude,longitude);
        setRouteCoordinates([...START_COORDINATE,[longitude,latitude]]);
      },
      (error) => console.log('Error getting position:', error),
      { enableHighAccuracy: true, distanceFilter: 0.5 }

    );

    return () => Geolocation.clearWatch(watchId);
  }, []);

  useEffect(() => {
    if (location && cameraRef.current) {
      cameraRef.current.setCamera({
        centerCoordinate: location,
        zoomLevel: 20,
        pitch: 50,
        animationDuration: 500,
        animationMode:'easeTo'
        
      });
    }
  }, [location]);

  return (
    <SafeAreaView style={styles.container}>
        <Header text="TrackingOrder" Searchasset={Assets.search} />
        <Text style={styles.orderText}>Order No. #123-456</Text>
        
      <View style={styles.overlayContainer}>
        
  <Image source={Assets.airplane} style={{width:30,height:30,objectFit:'contain'}}/>
<View style={styles.shippingInfo}>
          <Text style={styles.shippingText}>Qantas Airways</Text>
          <Text style={styles.statusText}>Shipped</Text>
          <Text style={styles.locationText}>Sydney, Australia</Text>
        </View>
        <View style={{
          width: 90,
          height: 90,
          backgroundColor: '#f2f2f2',
          alignItems: 'center',
          borderRadius: 10,
          justifyContent: 'center',
        }}/>
         
</View>
<MapplsGL.MapView
        
        style={{flex: 1}}
        compassEnabled={true}
        zoomEnabled={true}
        compassViewMargins={{ x: Dimensions.get('screen').width*0.05, y: Dimensions.get('screen').height*0.3 }}
      >
        <MapplsGL.Camera ref={cameraRef} followZoomLevel={16 }followPitch={50} />

        <MapplsGL.Animated.ShapeSource
    id="routeSource"
    shape={{
        type: 'Feature',
        geometry: {
            type: 'LineString',
            coordinates: routeCoordinates,
        },
    }}
>
    <MapplsGL.Animated.LineLayer
        id="routeLayer"
        style={{
            lineColor: '#Fa4248',
            lineWidth: 2,
            lineCap: 'round',
            lineJoin: 'round',
            lineOpacity: 0.7,
        }}
    />
</MapplsGL.Animated.ShapeSource>

        {location && <MapplsGL.UserLocation visible={true} renderMode="normal" showsUserHeadingIndicator={true}/  >}
        {/* {location && (
    <MapplsGL.UserLocation>
        <LottieView
            source={require('../assets/ripple.json')}
            autoPlay
            loop
            duration={8000}
            style={{
                width: 50,
                height: 50,
            }}
        />
</MapplsGL.UserLocation>
  )} */}
        
      </MapplsGL.MapView>
      
<CustomButton
        text="Continue"
        onPress={() => console.log('Continue')}
        customStyles={styles.button}
      />
    </SafeAreaView>
  )
}

export default TrackingOrderMap

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      width: Dimensions.get('window').width,
      height: '100%',
    },
    overlayContainer: {
        position: 'absolute',
        bottom: 100,
        zIndex: 1,
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent:'space-around',
        paddingHorizontal: 10,
        paddingVertical:20,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
      },
      trackingText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FF0000',
        marginBottom: 5,
      },
      
    
      orderText: {
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 15,
        fontWeight: 'bold',
        color: '#000',
      },
      shippingInfo: {
        borderRadius: 10,
    rowGap:10,
        width: '45%',
      },
      shippingText: {
        fontSize: 10,
        fontWeight: 'bold',
      },
      statusText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2ecc71',
      },
      locationText: {
        fontSize: 12,
        color: '#888',
      },
      button: {
        alignSelf: 'center',
        marginBottom: 20,
      },
     
  });
  