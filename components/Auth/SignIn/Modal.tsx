import {View, Text, StyleSheet, TextInput, Dimensions} from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';

import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../constants/types';

const Modal = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) => {
  const [focused, setFocused] = React.useState({
    username: false,
    password: false,
  });

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome</Text>
      <Text style={styles.sub}>
        Sign up to get started and experience great shopping deals
      </Text>

      <TextInput
        value={username}
        placeholder="Username"
        onFocus={() =>
          setFocused({
            ...focused,
            username: true,
          })
        }
        onBlur={() =>
          setFocused({
            ...focused,
            username: false,
          })
        }
        placeholderTextColor={'#000'}
        style={[
          styles.textinput,
          {borderBottomColor: focused.username ? '#FA4248' : '#707070'},
        ]}
        onChangeText={setUsername}
      />

      <TextInput
        value={password}
        placeholder="Password"
        placeholderTextColor={'#000'}
        secureTextEntry={true}
        onFocus={() =>
          setFocused({
            ...focused,
            password: true,
          })
        }
        onBlur={() =>
          setFocused({
            ...focused,
            password: false,
          })
        }
        style={[
          styles.textinput,
          {borderBottomColor: focused.password ? '#FA4248' : '#707070'},
        ]}
        onChangeText={setPassword}
      />
      <CustomButton
        onPress={() => navigation.navigate('Verification')}
        text="Sign In"
        customStyles={styles.button}
      />
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: 45,
    alignItems: 'center',
    padding: 20,
    width: '100%',
    position: 'relative',
    top: '20%',
  },
  header: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  sub: {
    color: '#474747',
    fontSize: 12,
    width: '70%',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10,
  },
  textinput: {
    width: Dimensions.get('window').width * 0.8,
    borderBottomWidth: 1,
    marginVertical: 15,
    color: '#000',
    padding: 10,
  },
  button: {
    marginTop: 20,
  },
});
