import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from '../Auth/SignIn/CustomButton';
const FilterView = ({
  setModalVisible,
}: {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No Filter Applied</Text>
      <CustomButton
        customStyles={styles.button}
        text="Filter"
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
};

export default FilterView;

const styles = StyleSheet.create({
  container: {
    height: '6%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: '8%',
  },
  button: {
    width: '45%',
    height: '100%',
    borderRadius: 50,
  },
  text: {
    fontSize: 14,
    width: '45%',
    textAlign: 'right',
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#111',
  },
});
