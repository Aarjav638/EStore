import {
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';

const CustomButton = ({
  customStyles,
  text,
  onPress,
  icon,
  textStyle,
}: {
  customStyles?: Record<string, string | number>;
  text: string;
  icon?: ImageSourcePropType;
  textStyle?: Record<string, string | number>;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      style={{...styles.button, ...customStyles}}
      onPress={onPress}>
      {icon && (
        <Image
          style={{
            width: 20,
            height: 20,
            marginRight: 10,
            resizeMode: 'contain',
          }}
          source={icon}
        />
      )}
      <Text style={{...styles.buttonText, ...textStyle}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FA4248',
    padding: 10,
    marginTop: 8,
    borderRadius: 20,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
