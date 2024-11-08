import {
  BackHandler,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import Topbar from '../components/Verification/Topbar';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../constants/types';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Splash/Header';
import CustomButton from '../components/Auth/SignIn/CustomButton';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import Assets from '../constants/images';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager} from 'react-native-fbsdk-next';
import {logOut} from '../redux/feature/Auth';
import {useFocusEffect} from '@react-navigation/native';
import LogRocket from '@logrocket/react-native';

type WelcomeProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const Welcome = ({navigation, route}: WelcomeProps) => {
  const {userInfo} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const handleLogout = async () => {
    try {
      LoginManager.logOut();
      await GoogleSignin.signOut();
      dispatch(logOut());
      return true;
    } catch (error) {
      console.error('Error logging out: ', error);
      return false;
    }
  };

  const handleBackPress = () => {
    handleLogout();
    return true;
  };

  useFocusEffect(
    React.useCallback(() => {
      if (route.name === 'Welcome') {
        BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () =>
          BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
      }
    }, [route.name]),
  );

  useEffect(() => {
    if (!userInfo || !userInfo.user.name) {
      navigation.navigate('SignIn');
    }
  }, [userInfo, navigation]);

  const handleSwitchAccount = () => {
    handleLogout();
  };

  useEffect(() => {
    if(userInfo.user.email){
      LogRocket.identify(userInfo.user.email, {
        name: userInfo.user.name ?? 'Name not provided',
        email: userInfo.user.email ?? 'Email not provided',
        photo: userInfo.user.photo ?? 'Photo not provided',
        id: userInfo.user.id ?? 'ID not available',
        mobile_number: userInfo.user.mobile ?? 'Mobile number not provided',
      });
    }
  }, [userInfo.user.email]);
  

  return (
    <SafeAreaView style={styles.container}>
      <Topbar text="Welcome" navigation={navigation} />
      <Header color="#151515" marginTop={'10%'} />
      <View style={styles.image}>
        <Image
          source={
            userInfo.user.photo ? {uri: userInfo.user.photo} : Assets.avatar
          }
          onError={e => console.log(e)}
          onLoadStart={() => console.log('loading')}
          onLoadEnd={() => console.log('loaded')}
          onPartialLoad={() => console.log('partial')}
          style={{height: '100%', width: '100%', borderRadius: 100}}
        />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.heading}>Welcome Back</Text>
        <Text
          style={
            styles.name
          }>{`${userInfo.user?.name?.toUpperCase() || 'GUEST'}`}</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <CustomButton
          onPress={() => navigation.navigate('Drawer')}
          text={`CONTINUE AS ${userInfo.user?.name?.toUpperCase() || 'GUEST'}`}
        />
        <CustomButton
          onPress={handleSwitchAccount}
          text="SWITCH ACCOUNT"
          customStyles={styles.button2}
          textStyle={{color: '#151515'}}
        />
      </View>
      <Text style={styles.accountText}>
        Don&apos;t Have an Account?{' '}
        <Text style={styles.subText} onPress={() => console.log('signUp')}>
          SignUp
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
  image: {
    height: '20%',
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    objectFit: 'cover',
  },
  nameContainer: {
    marginTop: '10%',
    alignItems: 'center',
    gap: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#151515',
  },
  name: {
    fontSize: 18,
    color: '#7E7D7D',
  },
  buttonWrapper: {
    marginTop: '10%',
    width: '100%',
    alignItems: 'center',
  },
  button2: {
    borderColor: '#DDDDDD',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
  },
  accountText: {
    marginTop: 10,
    textAlign: 'center',
    position: 'absolute',
    bottom: 20,
    color: '#404040',
    fontSize: 12,
  },
  subText: {
    color: '#E21E1E',
    fontWeight: 'bold',
  },
});
