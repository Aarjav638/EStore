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
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {logOut} from '../redux/feature/Auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const dispatch = useAppDispatch();
  const {userInfo} = useAppSelector(state => state.auth);
  const handleLogout = async () => {
    try {
      await GoogleSignin.signOut();
      dispatch(logOut());
      props.navigation.navigate('SignIn');
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };
  
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
              source={userInfo.user.photo ? {uri: userInfo.user.photo} : Assets.avatar}
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                objectFit: 'contain',
              }}
            />
            <Text style={styles.headerText}>{userInfo.user.name?userInfo.user.name:'Jameson'}</Text>
            <Text
              style={{
                fontSize: 14,
                color: 'white',
                opacity: 0.56,
              }}>
              {userInfo.user.email?userInfo.user.email:'jameson@gmail.com'}
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
            onPress={handleLogout}
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
