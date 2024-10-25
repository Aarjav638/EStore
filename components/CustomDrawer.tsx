import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BlurView} from '@react-native-community/blur';
import {
  DrawerContentComponentProps,
  DrawerItemList,
} from '@react-navigation/drawer';
import Assets from '../constants/images';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'transparent'} />
      <BlurView
        style={styles.blurView}
        blurType="light"
        blurAmount={5}
        reducedTransparencyFallbackColor="white"
      />
      <View style={styles.drawerItems}>
        <View style={styles.headerWrapper}>
          <View>
            <Image
              source={Assets.avatar}
              style={{
                height: 50,
                width: 50,
                objectFit: 'contain',
              }}
            />
            <Text style={styles.headerText}>Jameson Dunn</Text>
            <Text
              style={{
                fontSize: 14,
                color: 'white',
                opacity: 0.56,
              }}>
              @jamesondunn
            </Text>
          </View>
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            <Image
              source={Assets.menu}
              style={{
                height: 35,
                width: 35,
                tintColor: 'white',
                objectFit: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>
        <DrawerItemList
          {...props}
          state={props.state}
          navigation={props.navigation}
        />
        <View
          style={{
            paddingTop: '12%',
            paddingHorizontal: '10%',
            rowGap: 20,
          }}>
          <Text
            onPress={() => props.navigation.navigate('Products')}
            style={{
              fontSize: 16,
              color: 'white',
              opacity: 0.56,
            }}>
            About us
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: 'white',
              opacity: 0.56,
            }}>
            Log Out
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: '10%',
  },
  drawerItems: {
    backgroundColor: '#F01738',
    borderTopEndRadius: 40,
    borderBottomEndRadius: 40,
    overflow: 'hidden',
    width: '80%',
    height: '80%',
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,0.25)',
    height: '35%',
    width: '100%',
    paddingTop: '20%',
    paddingHorizontal: '5%',
    paddingLeft: '10%',
    marginBottom: '8%',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
