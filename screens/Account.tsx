import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Discover/Header';
import Assets from '../constants/images';
import RightArrow from '../assets/chevron-right.svg';
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

const Account = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header text="Account" Searchasset={Assets.search} />
      <View style={styles.profileHeader}>
        <Image
          source={Assets.avatar}
          style={{
            width: '30%',
            height: '100%',
            objectFit: 'contain',
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
            Jameson Dunn
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'semibold',
              color: 'black',
            }}>
            jamesondunn@gmail.com
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
