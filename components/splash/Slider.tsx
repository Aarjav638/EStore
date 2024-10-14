import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef, useEffect} from 'react';
const data = [
  {
    title: 'Welcome',
    subTitle: 'SignUp to Superstore',
  },
  {
    title: 'Welcome',
    subTitle: 'Login to Superstore',
  },
  {
    title: 'SuperStore',
    subTitle: "Men's Fashion",
  },
  {
    title: 'SuperStore',
    subTitle: "Women's Fashion",
  },
];
const Slider = ({
  slider,

  setSlider,
}: {
  slider: number;
  setSlider: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {contentOffset} = event.nativeEvent;
    const currentIndex = Math.round(
      contentOffset.x / Dimensions.get('window').width,
    );
    setSlider(currentIndex);
  };
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = slider + 1 < data.length ? slider + 1 : 0;
      flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});
    }, 1500);

    return () => clearInterval(interval);
  }, [slider]);
  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        renderItem={({item}) => (
          <View style={styles.flatlistContainer}>
            <Text style={styles.headerText}>{item.title}</Text>
            <Text style={styles.subText}>{item.subTitle}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    flex: 0.7,

    backgroundColor: 'transparent',
  },
  flatlistContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 5,
    width: Dimensions.get('window').width,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'semibold',
    textTransform: 'uppercase',
  },
  subText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'semibold',
    textTransform: 'capitalize',
  },
});
