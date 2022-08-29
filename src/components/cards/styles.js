import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/colors';
import {normalize} from '../../utils/scale';

const styles = StyleSheet.create({
  groceryItemContainer: evenElement => ({
    width: '46%',
    height: normalize(200),
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    paddingBottom: '1.5%',
    marginVertical: '3%',
    marginRight: evenElement ? '2%' : 0,
    marginLeft: evenElement ? 0 : '2%',
  }),
  groceryItemImage: {
    width: '100%',
    height: '50%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    resizeMode: 'cover',
  },
  descriptionContainer: {padding: '6%'},
  groceryItemTitle: {
    fontSize: normalize(16),
    fontWeight: 'bold',
    color: COLORS.BLACK,
    // height: '33%',
  },
  groceryItemQuantity: {
    fontSize: normalize(14),
    marginVertical: '5%',
    fontWeight: '600',
    color: COLORS.PRIMARY_GREY,
  },
  priceContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceLabel: {
    fontSize: normalize(17),
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },
});

export default styles;
