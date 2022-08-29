import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export const CheckoutButton = ({onPress, label, price}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.checkoutButtonContainer}>
      <Text style={styles.checkoutButtonLabel}>{label}</Text>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={styles.checkoutButtonBadge}>
        $12.96
      </Text>
    </TouchableOpacity>
  );
};
