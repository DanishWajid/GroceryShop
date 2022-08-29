import React from 'react';
import {View, TextInput} from 'react-native';

import {DropdownPicker} from './dropdownPicker';
import {normalize} from '../../utils/scale';
import {COLORS} from '../../theme/colors';
import AntIcon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

export const SearchBar = ({currencies}) => {
  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.inputContainer}>
        <AntIcon
          name="search1"
          size={normalize(25)}
          color={COLORS.PRIMARY_BLACK}
        />
        <TextInput style={styles.input} />
        <AntIcon
          name="closecircle"
          size={normalize(20)}
          color={COLORS.MUTED_GREY}
        />
      </View>
      <DropdownPicker items={currencies} />
    </View>
  );
};
