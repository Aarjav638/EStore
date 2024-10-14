import {ImageSourcePropType, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const CustomButton = ({
  styles,
  text,
  onPress,
  icon,
  textStyle,
}: {
  styles: Record<string, string | number>;
  text: string;
  icon?: ImageSourcePropType;
  textStyle: Record<string, string | number>;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity style={styles} onPress={onPress}>
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
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
