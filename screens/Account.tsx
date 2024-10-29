import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Discover/Header';
import Assets from '../constants/images';
import RightArrow from '../assets/chevron-right.svg';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {logOut} from '../redux/feature/Auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {NavigationProp} from '@react-navigation/native';
import {AccountStackParamList} from '../components/AccountStack';
const data = [
  {
    id: 1,
    title: 'Edit Profile',
  },
  {
    id: 2,
    title: 'Shipping Address',
  },
  {
    id: 3,
    title: 'Wishlist',
  },

  {
    id: 4,
    title: 'Order History',
  },
  {
    id: 5,
    title: 'Track Order',
  },
  {
    id: 6,
    title: 'Cards',
  },
  {
    id: 7,
    title: 'Notification',
  },
  {
    id: 8,
    title: 'Log Out',
  },
];

type AccountProps = NavigationProp<AccountStackParamList, 'Account'>;

const Account = ({navigation}: {navigation: AccountProps}) => {
  const {userInfo} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const handleLogout = async () => {
    try {
      await GoogleSignin.signOut();
      dispatch(logOut());
      navigation.navigate('SignIn');
    } catch (error) {
      console.error('Error logging out: ', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header text="Account" Searchasset={Assets.search} />
      <View style={styles.profileHeader}>
        <Image
          source={
            userInfo.user.photo ? {uri: userInfo.user.photo} : Assets.avatar
          }
          style={{
            width: '30%',
            height: '75%',
            objectFit: 'cover',
            borderRadius: 100,
            marginRight: 10,
          }}
        />
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
            marginStart: '5%',
            rowGap: 4,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'black',
            }}>
            {userInfo.user.name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'semibold',
              color: 'black',
            }}>
            {userInfo.user.email}
          </Text>
        </View>
      </View>
      <ScrollView
        style={{
          paddingHorizontal: 20,
          marginBottom: '8%',
          paddingRight: '10%',
        }}
        contentContainerStyle={{
          justifyContent: 'space-between',
          flexGrow: 1,
        }}>
        {data.map(item => (
          <View
            key={item.id}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: 20,
              }}>
              <View
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: '#FA42484F',
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={Assets.card}
                  style={{
                    width: 20,
                    tintColor: '#FA4248',
                    height: 20,
                    opacity: 0.5,
                    objectFit: 'contain',
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                }}
                onPress={() => {
                  if (item.id === 8) {
                    handleLogout();
                  } else {
                    console.log('Not implemented yet');
                  }
                }}>
                {item.title}
              </Text>
            </View>
            {item.id !== 8 && (
              <RightArrow height={14} width={14} stroke={'black'} />
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  profileHeader: {
    flexDirection: 'row',
    height: '25%',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
});
