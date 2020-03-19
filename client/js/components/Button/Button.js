import React from 'react';
import styles from './styles';
import Text from '../CustomText/CustomText';
import {TouchableOpacity} from 'react-native';

export default Button = ({text, onPress, bgcolor}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: `${bgcolor}`}]}
      onPress={onPress}>
      <Text style={styles.label}>{text}</Text>
    </TouchableOpacity>
  );
};