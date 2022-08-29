import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/colors';
import {normalize} from '../../utils/scale';

const styles = StyleSheet.create({
  smallButtonContainer: {
    backgroundColor: COLORS.PRIMARY_GREEN,
    padding: '2%',
    borderRadius: 8,
  },

  checkoutButtonContainer: {
    height: normalize(45),
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: COLORS.PRIMARY_GREEN,
    alignSelf: 'center',
    borderRadius: 15,
    alignItems: 'center',
    position: 'absolute',
    bottom: 15,
  },
  checkoutButtonLabel: {
    color: COLORS.WHITE,
    fontSize: normalize(20),
    fontWeight: '600',
    width: '60%',
    textAlign: 'right',
  },
  checkoutButtonBadge: {
    width: '25%',
    paddingVertical: '1.5%',
    paddingHorizontal: '2%',
    backgroundColor: COLORS.PRIMARY_DARK_GREEN,
    color: COLORS.WHITE,
    borderRadius: 5,
    textAlign: 'center',
  },
});

export default styles;
