import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Topbar from '../components/Verification/Topbar';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../constants/types';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Splash/Header';
import CustomButton from '../components/Auth/SignIn/CustomButton';
import {useAppSelector} from '../redux/hooks';
import Assets from '../constants/images';

type WelcomeProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const Welcome = ({navigation}: WelcomeProps) => {
  const {userInfo} = useAppSelector(state => state.auth);
  console.log(userInfo)
  return (
    <SafeAreaView style={styles.container}>
      <Topbar text="Welcome" navigation={navigation} />
      <Header color="#151515" marginTop={'10%'} />
      <View style={styles.image}>
        <Image
         source={userInfo.user.photo?{uri:userInfo?.user.photo}:Assets.avatar}
          onError={e => console.log(e)}
          onLoadStart={() => console.log('loading')}
          onLoadEnd={() => console.log('loaded')}
          onPartialLoad={() => console.log('partial')}
          style={{height: '100%', width: '100%', borderRadius: 100}}
        />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.heading}>Welcome Back</Text>
        <Text style={styles.name}>{userInfo.user.name}</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <CustomButton
          onPress={() => navigation.navigate('Drawer')}
          text={`CONTINUE AS ${userInfo.user.name.toUpperCase()}`}
        />
        <CustomButton
          onPress={() => navigation.navigate('SignIn')}
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
