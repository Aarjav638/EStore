import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Assets from '../constants/images';
import {DrawerParamList} from '../constants/types';
import {DrawerActions, NavigationProp} from '@react-navigation/native';
import CustomButton from '../components/Auth/SignIn/CustomButton';

const Contact = ({
  navigation,
}: {
  navigation: NavigationProp<DrawerParamList, 'Products'>;
}) => {
  return (
    <View style={styles.maincontainer}>
      <StatusBar barStyle="light-content" backgroundColor={'transparent'} />
      <View style={styles.header}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation?.dispatch(DrawerActions.openDrawer())}>
            <Image
              source={Assets.menu}
              style={{
                ...styles.image,
                tintColor: '#fff',
                height: 28,
                width: 30,
              }}
            />
          </TouchableOpacity>
          <Text style={{...styles.text}}>Contacts</Text>
          <View style={{flexDirection: 'row', columnGap: 8}}>
            <TouchableOpacity
              onPress={() => (
                console.log('search presssed'), navigation?.navigate('Search')
              )}>
              <Image source={Assets.search} style={{...styles.image}} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.mapPlaceholder}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'medium',
            color: '#757575',
          }}>
          Map Placeholder
        </Text>
      </View>
      <View style={styles.storeWrapper}>
        <ScrollView
          style={{
            flex: 1,
          }}
          contentContainerStyle={{
            padding: 20,
            flexGrow: 1,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: '#000',
              marginTop: 20,
            }}>
            Locate a Store
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'medium',
              color: '#767676',
              marginTop: 20,
              textAlign: 'center',
            }}>
            Easily locate a store from your current location. Click locate
            below.
          </Text>
          <CustomButton
            text="Locate"
            customStyles={{
              width: '50%',
              height: 50,
              borderRadius: 50,
              marginTop: 20,
            }}
            textStyle={{
              textTransform: 'uppercase',
            }}
            onPress={() => console.log('Settings Updated')}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'medium',
              color: '#352641',
              marginTop: 10,
            }}>
            Nearby Stores (2)
          </Text>
          <View style={styles.storeDirectionWrapper}>
            <View
              style={{
                columnGap: 10,
                flexDirection: 'row',
                width: '65%',
              }}>
              <Image
                source={Assets.gps}
                style={{
                  height: 50,
                  width: 50,
                  objectFit: 'cover',
                }}
              />
              <View style={{rowGap: 5}}>
                <Text
                  style={{
                    fontSize: 10,
                    color: '#FA4248',
                  }}>
                  Find Directions
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'medium',
                    color: '#000000',
                  }}>
                  Kelio Store
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'medium',
                    color: '#767676',
                  }}>
                  Melbourne, AU
                </Text>
              </View>
            </View>
            <View
              style={{
                height: '100%',
                width: '35%',
                backgroundColor: '#ddd',
                borderRadius: 20,
              }}
            />
          </View>
          <View style={styles.storeDirectionWrapper}>
            <View
              style={{
                columnGap: 10,
                flexDirection: 'row',
                width: '65%',
              }}>
              <Image
                source={Assets.gps}
                style={{
                  height: 50,
                  width: 50,
                  objectFit: 'cover',
                }}
              />
              <View style={{rowGap: 5}}>
                <Text
                  style={{
                    fontSize: 10,
                    color: '#FA4248',
                  }}>
                  Find Directions
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'medium',
                    color: '#000000',
                  }}>
                  Baybrook Store
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'medium',
                    color: '#767676',
                  }}>
                  Melbourne, AU
                </Text>
              </View>
            </View>
            <View
              style={{
                height: '100%',
                width: '35%',
                backgroundColor: '#ddd',
                borderRadius: 20,
              }}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    right: 0,
    backgroundColor: '#000000',
    height: '20%',
    borderEndEndRadius: 40,
    borderStartEndRadius: 40,
    zIndex: 100,
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  image: {
    height: 18,
    width: 18,
    objectFit: 'cover',
    tintColor: '#757575',
  },
  text: {
    fontSize: 24,
    fontWeight: 'medium',
    color: '#fff',
  },
  mapPlaceholder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ddd',
    width: '100%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storeWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: '50%',
    backgroundColor: '#fff',
    zIndex: 100,
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
  },
  storeDirectionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 120,
    marginTop: '10%',
    elevation: 10,
    padding: 10,
    borderRadius: 20,
    shadowColor: 'grey',
    backgroundColor: '#fff',
  },
});
