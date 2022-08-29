import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/colors';
import {normalize} from '../../utils/scale';

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '5%',
  },
  inputContainer: {
    backgroundColor: COLORS.MUTED_WHITE,
    flexDirection: 'row',
    width: '72%',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: '3%',
    height: normalize(45),
  },
  input: {width: '75%', marginHorizontal: '3%'},

  dropdownContainer: {
    width: '25%',
    height: normalize(45),
  },
  dropdown: {borderWidth: 0},
});

export default styles;
