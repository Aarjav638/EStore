import React from 'react';
import {TextInput, Text, StyleSheet, ScrollView, View} from 'react-native';

const AddressForm = ({
  street1,
  setStreet1,
  street2,
  setStreet2,
  city,
  setCity,
  state,
  setState,
  country,
  setCountry,
}: {
  street1: string;
  setStreet1: React.Dispatch<React.SetStateAction<string>>;
  street2: string;
  setStreet2: React.Dispatch<React.SetStateAction<string>>;
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Street 1</Text>
      <TextInput
        style={styles.input}
        placeholder="Street 1"
        placeholderTextColor={'#bbb'}
        value={street1}
        cursorColor={'#000'}
        onChangeText={text => setStreet1(text)}
      />
      <Text style={styles.label}>Street 2</Text>
      <TextInput
        style={styles.input}
        placeholder="Street 2"
        value={street2}
        placeholderTextColor={'#bbb'}
        onChangeText={setStreet2}
      />
      <Text style={styles.label}>City</Text>
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        placeholderTextColor={'#bbb'}
        onChangeText={setCity}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            width: '45%',
          }}>
          <Text style={styles.label}>State</Text>
          <TextInput
            style={styles.input}
            placeholder="State"
            value={state}
            placeholderTextColor={'#bbb'}
            onChangeText={setState}
          />
        </View>
        <View
          style={{
            width: '45%',
          }}>
          <Text style={styles.label}>Country</Text>
          <TextInput
            style={styles.input}
            placeholder="Country"
            value={country}
            placeholderTextColor={'#bbb'}
            onChangeText={setCountry}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    justifyContent: 'center',
  },

  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
  },
  label: {
    color: '#000',
    fontSize: 14,
    opacity: 0.5,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default AddressForm;
