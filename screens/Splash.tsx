import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/splash/Header';
import Slider from '../components/splash/Slider';
import Pagination from '../components/splash/Pagination';
import RightArrow from '../assets/arrow-right.svg';
const Splash = () => {
  const [slider, setSlider] = React.useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Slider slider={slider} setSlider={setSlider} />
      <View style={styles.but_Dot_Conatiner}>
        <Pagination DotsLength={4} activeDot={slider} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Next</Text>

          <RightArrow height={14} width={14} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04040466',
  },
  button: {
    justifyContent: 'space-evenly',
    borderRadius: 20,
    flexDirection: 'row',
    width: '30%',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FA4248',
  },
  text: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  but_Dot_Conatiner: {
    position: 'absolute',
    bottom: '10%',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
