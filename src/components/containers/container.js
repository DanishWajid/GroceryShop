import React from 'react';
import {View} from 'react-native';
import styles from './styles';

export const Container = ({children, customStyles}) => {
  return <View style={[styles.container, customStyles]}>{children}</View>;
};
