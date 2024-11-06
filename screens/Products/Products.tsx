import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Animated,
  StatusBar,
  TouchableOpacity,
  Image,
  Share,
  TextInput,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import Assets from '../../constants/images';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CategoryStackParams} from '../../constants/types';
import CustomButton from '../../components/Auth/SignIn/CustomButton';
import ProductsSkeleton from './ProductsSkeleton';
import {DrawerActions, useNavigation, useRoute} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {addToCart} from '../../redux/feature/Cart';
import {AppEventsLogger} from 'react-native-fbsdk-next';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const Products = () => {
  const navigation =
    useNavigation<NativeStackScreenProps<CategoryStackParams>['navigation']>();
  const route =
    useRoute<
      NativeStackScreenProps<CategoryStackParams, 'Products'>['route']
    >();
  const dispatch = useAppDispatch();
  const {cartItems} = useAppSelector(state => state.cart);
  const [heartClicked, setHeartClicked] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);
  const title = route.params?.title ?? 'Products';
  const id = route.params?.id ;
  const [loading, setLoading] = useState(true);
  const scrollY = new Animated.Value(0);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const headerHeight = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [SCREEN_HEIGHT * 0.65, SCREEN_HEIGHT * 0.4],
    extrapolate: 'clamp',
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  const headerBackgroundColor = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: ['#808080', '#555555'],
    extrapolate: 'clamp',
  });
  const oldContentOpacity = scrollY.interpolate({
    inputRange: [0, SCREEN_HEIGHT * 0.4],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const newContentOpacity = scrollY.interpolate({
    inputRange: [SCREEN_HEIGHT * 0.1, SCREEN_HEIGHT * 0.3],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  if (loading) {
    return <ProductsSkeleton title={title} />;
  }

  const handleAddedToCart = () => {
    const checkItem = cartItems.find(item => item.id === 1);
    if (checkItem) {
      return true;
    }
    return false;
  };

  const AddedToCart = handleAddedToCart();

  const handleAddToCart = () => {
    if (AddedToCart) {
      navigation.navigate('Cart');
    } else {
      dispatch(
        addToCart({
          id: id? id : 1,
          name: 'Gucci Sunglasses',
          price: 45,
          image_url: 'https://dummyimage.com/200x200/000/fff&text=Sunglasses',
          category: 'Sunglasses',
          brand: 'Gucci',
          rating: 5,
          quantity: quantity,
        }),
      );
      AppEventsLogger.logProductItem(
        '1',
        'in_stock',
        'new',
        'Gucci Sunglasses',
        'Guuci Sunglasses',
        'https://dummyimage.com/200x200/000/fff&text=Sunglasses',
        'https://dummyimage.com/200x200/000/fff&text=Sunglasses',
        4500,
        'INR',
        'Gucci',
      );
      AppEventsLogger.logEvent('AddedToCart', {
        content_type: 'product',
        content_id: '1',
        currency: 'INR',
        description: 'Gucci Sunglasses',
        value: 4500,
      });
    }
  };

  const handleShare = async () => {
    try {
      const deepUrl = `estore://drawer/category/products/${id}`;
      Platform.OS === 'ios'? Share.share({
        message: 'Gucci Sunglasses',
        url: deepUrl,
      }).then(result=>
        console.log('result',result)
      ): Share.share({
        message: `
        Click the link to view the product
        Gucci Sunglasses
        ${deepUrl}
        `,
        title: 'Gucci Sunglasses',
      }).then(result=>
        console.log('result',result)
        );
    } catch (error) {
      console.log('error', error);
      
    }
  };
console.log('id',id)
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#808080" />
      {/* HEader View */}
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          height: headerHeight,
          backgroundColor: headerBackgroundColor,
          borderBottomEndRadius: 40,
          borderBottomStartRadius: 40,
        }}>
        <View
          style={{
            position: 'relative',
            top: 10,
            left: 0,
            right: 0,
            zIndex: 1,
            height: Dimensions.get('window').height * 0.1,
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginTop: 20,
            paddingTop: 10,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Image
              source={Assets.menu}
              style={{
                height: 30,
                width: 30,
                objectFit: 'cover',
                tintColor: '#Fff',
              }}
            />
          </TouchableOpacity>
          <Text style={{color: '#fff', fontSize: 24, fontWeight: 'medium'}}>
            {title}
          </Text>
          <TouchableOpacity onPress={() => setHeartClicked(!heartClicked)}>
            <Image
              source={heartClicked ? Assets.heart : Assets.heartUnfilled}
              style={{
                height: 18,
                width: 18,
                objectFit: 'cover',
                tintColor: '#Fff',
              }}
            />
          </TouchableOpacity>
        </View>
        <Animated.View
          style={{
            flexDirection: 'row',
            height: '55%',
            top: 20,
            left: 0,
            right: 0,
            position: 'relative',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <Animated.View style={{gap: 10, opacity: headerOpacity}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#C92636',
                borderWidth: 1,
                borderColor: '#fff',
                borderRadius: 50,
                height: 25,
                width: 25,
              }}
            />

            <TouchableOpacity
              style={{
                backgroundColor: '#E0EE27',
                borderWidth: 1,
                borderColor: '#fff',
                borderRadius: 50,
                height: 25,
                width: 25,
              }}
            />
            <TouchableOpacity
              style={{
                backgroundColor: '#2748EE',
                borderWidth: 1,
                borderColor: '#fff',
                borderRadius: 50,
                height: 25,
                width: 25,
              }}
            />
          </Animated.View>
          <Image
            source={Assets.sunglasses}
            style={{
              height: 200,
              width: 200,
              objectFit: 'contain',
            }}
          />
          <Animated.View style={{gap: 12, opacity: headerOpacity}}>
            <TouchableOpacity
              style={{
                backgroundColor: 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: '#fff',
                borderRadius: 50,
                height: 40,
                width: 40,
              }}>
              <Text style={{color: '#FEFEFE', fontSize: 24}}>L</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: '#fff',
                borderRadius: 50,
                height: 40,
                width: 40,
              }}>
              <Text style={{color: '#FEFEFE', fontSize: 24}}>M</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: '#fff',
                borderRadius: 50,
                height: 40,
                width: 40,
              }}>
              <Text style={{color: '#FEFEFE', fontSize: 24}}>S</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
        <Animated.View
          style={{
            height: '25%',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: headerOpacity,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 24,
              opacity: 0.5,
            }}>
            Gucci Sunglasses
          </Text>
          <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>
            $45
          </Text>
        </Animated.View>
      </Animated.View>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: false,
          },
        )}
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingTop: SCREEN_HEIGHT * 0.65,
          flexGrow: 1,
          paddingBottom: 20,
        }}
        style={{
          backgroundColor: '#fff',

          padding: 20,
        }}>
        <Animated.Text
          style={{
            color: '#767676',
            fontSize: 14,
            textAlign: 'center',
            width: '80%',
            opacity: oldContentOpacity,
            alignSelf: 'center',
          }}>
          If you&apos;re offered a seat on a rocket ship, don&apos;t ask what
          seat! Just get on.
        </Animated.Text>
        <Animated.View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '15%',
            opacity: oldContentOpacity,
          }}>
          <CustomButton
            onPress={handleAddToCart}
            customStyles={styles.button}
            text={AddedToCart ? 'Go To Cart' : 'Add To Cart'}
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
            onPress={handleShare}
              style={{
                borderRadius: 50,
                backgroundColor: '#FA4248',
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
              }}>
              <Image
                source={Assets.share}
                style={{
                  height: 20,
                  width: 20,
                  objectFit: 'contain',
                  tintColor: '#fff',
                }}
              />
            </TouchableOpacity>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            opacity: newContentOpacity,
            // transform: [{translateY: newContentPosition}],
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '15%',
              paddingHorizontal: 20,
            }}>
            <Text style={styles.productHeader}>Gucci Sunglasses</Text>
            <Text style={styles.price}>$45</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <View
              style={{
                borderColor: '#EBEBEB',
                borderWidth: 1,
                borderRadius: 20,
                height: 40,
                width: '50%',
                paddingHorizontal: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#000',
                }}>
                Size
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#000',
                  fontWeight: 'bold',
                }}>
                M
              </Text>
            </View>
            <View
              style={{
                borderColor: '#EBEBEB',
                borderWidth: 1,
                borderRadius: 20,
                height: 40,
                width: '50%',
                paddingHorizontal: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#000',
                }}>
                Colour
              </Text>
              <View
                style={{
                  backgroundColor: '#E0EE27',
                  height: 20,
                  width: 20,
                  borderRadius: 50,
                }}
              />
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              paddingHorizontal: 20,
              rowGap: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#000',
              }}>
              Description
            </Text>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                color: '#767676',
              }}>
              If you’re offered a seat on a rocket ship, don’t ask what seat!
              Just get on board and move the sail towards the destination.
            </Text>

            <View
              style={{
                marginVertical: 20,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                columnGap: 10,
              }}>
              <CustomButton
                onPress={handleAddToCart}
                customStyles={styles.button}
                text={AddedToCart ? 'Go To Cart' : 'Add To Cart'}
                textStyle={styles.buttonText}
              />
              <View
                style={{
                  flexDirection: 'row',
                  columnGap: 8,
                  width: '30%',
                  borderRadius: 20,
                  backgroundColor: '#0000000F',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  height: 30,
                  paddingHorizontal: 10,
                }}>
                <Text
                  onPress={() => setQuantity(quantity + 1)}
                  style={{
                    color: '#000',
                    fontSize: 14,
                    textAlign: 'center',
                    width: 20,
                  }}>
                  +
                </Text>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 14,
                  }}>
                  {quantity}
                </Text>
                <Text
                  onPress={() => {
                    if (quantity > 1) {
                      setQuantity(quantity - 1);
                    }
                  }}
                  style={{
                    color: '#000',
                    fontSize: 18,
                    textAlign: 'center',
                    width: 20,
                  }}>
                  -
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#000',
                paddingHorizontal: 20,
              }}>
              You May Also Like
            </Text>
            <View
              style={{
                gap: 10,
                marginTop: 10,
                marginBottom: 20,
                flexDirection: 'row',
              }}>
              <Image
                source={Assets.whiteDress}
                style={{
                  height: 120,
                  width: 120,
                  borderRadius: 20,
                  objectFit: 'contain',
                }}
              />

              <View
                style={{
                  height: 120,
                  width: '60%',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    // paddingHorizontal: 10,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: '#000', fontSize: 16}}>White Dress</Text>
                  <Text style={{color: '#FA4248', fontSize: 18}}>$15</Text>
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#767676',
                    // paddingHorizontal: 10,
                  }}>
                  Women
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 10,
                    width: '14%',
                  }}>
                  <Image
                    source={Assets.basket}
                    style={{
                      height: 16,
                      width: '100%',
                      tintColor: '#FA4248',
                      objectFit: 'contain',
                    }}
                  />
                  <Image
                    source={Assets.heartUnfilled}
                    style={{
                      height: 16,
                      width: '100%',
                      tintColor: 'black',
                      objectFit: 'contain',
                    }}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                gap: 10,
                marginTop: 10,
                marginBottom: 20,
                flexDirection: 'row',
              }}>
              <Image
                source={Assets.redDress}
                style={{
                  height: 120,
                  width: 120,
                  borderRadius: 20,
                  objectFit: 'contain',
                }}
              />

              <View
                style={{
                  height: 120,
                  width: '60%',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    // paddingHorizontal: 10,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: '#000', fontSize: 16}}>Red Dress</Text>
                  <Text style={{color: '#FA4248', fontSize: 18}}>$15</Text>
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#767676',
                    // paddingHorizontal: 10,
                  }}>
                  Women
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 10,
                    width: '14%',
                  }}>
                  <Image
                    source={Assets.basket}
                    style={{
                      height: 16,
                      width: '100%',
                      tintColor: '#FA4248',
                      objectFit: 'contain',
                    }}
                  />
                  <Image
                    source={Assets.heartUnfilled}
                    style={{
                      height: 16,
                      width: '100%',
                      tintColor: 'black',
                      objectFit: 'contain',
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={{marginVertical: 20, paddingHorizontal: 20}}>
            <Text
              style={{
                color: '#000',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Reviews
            </Text>
            <TextInput
              placeholder="Write Yours"
              placeholderTextColor={'#78849E'}
              style={{
                color: '#000',
                height: 40,
                marginTop: 10,
              }}
            />
          </View>

          <View
            style={{
              rowGap: 20,
              marginBottom: 20,
            }}>
            <View
              style={{flexDirection: 'row', paddingHorizontal: 20, gap: 15}}>
              <View
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 50,
                  backgroundColor: '#808080',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
              <View
                style={{
                  height: 70,
                  width: '80%',
                  justifyContent: 'center',
                  paddingHorizontal: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 14,
                      fontWeight: 'bold',
                      marginBottom: 5,
                    }}>
                    Andre Young
                  </Text>
                  <View style={{flexDirection: 'row', columnGap: 4}}>
                    {Array.from({length: 5}).map((_, index) => (
                      <Image
                        key={index}
                        source={Assets.star}
                        style={{
                          height: 15,
                          width: 15,
                          objectFit: 'contain',
                          tintColor: '#FFC107',
                        }}
                      />
                    ))}
                  </View>
                </View>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 14,
                    lineHeight: 27,
                  }}>
                  Wonderful glasses, perfect gift for my girl for our
                  anniversary!
                </Text>
              </View>
            </View>
            <View
              style={{flexDirection: 'row', paddingHorizontal: 20, gap: 15}}>
              <View
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 50,
                  backgroundColor: '#808080',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
              <View
                style={{
                  height: 70,
                  width: '80%',
                  justifyContent: 'center',
                  paddingHorizontal: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 14,
                      fontWeight: 'bold',
                      marginBottom: 5,
                    }}>
                    Jey Brooks
                  </Text>
                  <View style={{flexDirection: 'row', columnGap: 4}}>
                    {Array.from({length: 5}).map((_, index) => (
                      <Image
                        key={index}
                        source={Assets.star}
                        style={{
                          height: 15,
                          width: 15,
                          objectFit: 'contain',
                          tintColor: '#FFC107',
                        }}
                      />
                    ))}
                  </View>
                </View>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 14,
                    lineHeight: 27,
                  }}>
                  Wonderful glasses, perfect gift for my girl for our
                  anniversary!
                </Text>
              </View>
            </View>
          </View>
        </Animated.View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default Products;

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
  productItem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 10,
  },
  productHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#241332',
    marginVertical: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#241332',
  },
});
