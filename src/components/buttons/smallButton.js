import React from 'react';
import {TouchableOpacity} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../theme/colors';
import {normalize} from '../../utils/scale';
import styles from './styles';

export const SmallButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.smallButtonContainer}>
      <MaterialIcon name="add" size={normalize(25)} color={COLORS.WHITE} />
    </TouchableOpacity>
  );
};
