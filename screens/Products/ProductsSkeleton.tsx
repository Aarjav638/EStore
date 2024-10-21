import {
  StyleSheet,
  View,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Discover/Header';
import Assets from '../../constants/images';
import CustomButton from '../../components/Auth/SignIn/CustomButton';

const ProductsSkeleton = ({title}: {title: string}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#808080" />
      <View
        style={{
          flex: 0.75,
          borderBottomEndRadius: 40,
          borderBottomStartRadius: 40,
          backgroundColor: '#808080',
          paddingVertical: 20,
        }}>
        <Header
          text={title}
          textStyle={{color: '#fff'}}
          imageStyle={{tintColor: '#fff'}}
          heartAsset={Assets.heartUnfilled}
          menuIconStyle={{tintColor: '#fff'}}
        />
        <View
          style={{
            flexDirection: 'row',
            height: '70%',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <View style={{gap: 10}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#cecece',
                borderWidth: 1,
                borderColor: '#fff',
                borderRadius: 50,
                height: 25,
                width: 25,
              }}
            />

            <TouchableOpacity
              style={{
                backgroundColor: '#cecece',
                borderWidth: 1,
                borderColor: '#fff',
                borderRadius: 50,
                height: 25,
                width: 25,
              }}
            />
            <TouchableOpacity
              style={{
                backgroundColor: '#cecece',
                borderWidth: 1,
                borderColor: '#fff',
                borderRadius: 50,
                height: 25,
                width: 25,
              }}
            />
          </View>
          <View style={{gap: 12}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#cecece',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: '#fff',
                borderRadius: 50,
                height: 40,
                width: 40,
              }}
            />

            <TouchableOpacity
              style={{
                backgroundColor: '#cecece',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: '#fff',
                borderRadius: 50,
                height: 40,
                width: 40,
              }}
            />
            <TouchableOpacity
              style={{
                backgroundColor: '#cecece',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: '#fff',
                borderRadius: 50,
                height: 40,
                width: 40,
              }}
            />
          </View>
        </View>
        <View
          style={{
            height: '25%',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
          }}>
          <View
            style={{
              backgroundColor: '#cecece',
              height: 24,
              width: '60%',
            }}
          />
          <View
            style={{backgroundColor: '#cecece', height: 30, width: '25%'}}
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          flex: 0.25,
          padding: 20,
          justifyContent: 'space-between',
        }}>
        <View>
          <View
            style={{
              backgroundColor: '#767676',
              height: 14,
              width: '80%',
              alignSelf: 'center',
              marginBottom: 8,
            }}
          />
          <View
            style={{
              backgroundColor: '#767676',
              height: 14,
              width: '50%',
              alignSelf: 'center',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <CustomButton
            onPress={() => console.log('Add to cart')}
            customStyles={styles.button}
            text="Add To Cart"
            textStyle={styles.buttonText}
          />
          <View style={{flexDirection: 'row', columnGap: 8}}>
            <TouchableOpacity
              style={{
                borderRadius: 50,
                backgroundColor: '#9599B3',
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
              }}>
              <Image
                source={Assets.back}
                style={{
                  height: 20,
                  width: 20,
                  objectFit: 'contain',
                  tintColor: '#fff',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderRadius: 50,
                backgroundColor: '#FA4248',
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
              }}>
              <Image
                source={Assets.back}
                style={{
                  height: 20,
                  width: 20,
                  objectFit: 'contain',
                  tintColor: '#fff',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductsSkeleton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
    width: Dimensions.get('window').width,
  },
  buttonText: {
    textTransform: 'uppercase',
  },
  button: {
    width: '50%',
  },
});
