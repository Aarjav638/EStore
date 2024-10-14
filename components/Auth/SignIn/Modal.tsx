import {View, Text, StyleSheet, TextInput, Dimensions} from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';

const Modal = () => {
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
        onPress={() => console.log('pressed')}
        text="Sign In"
        styles={styles.button}
        textStyle={styles.buttonText}
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
    backgroundColor: '#FA4248',
    padding: 14,
    marginTop: 20,
    borderRadius: 20,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
