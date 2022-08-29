import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Products} from '../items';

import {GroceryItem} from '../components/cards';

import {Container} from '../components/containers';
import {COLORS} from '../theme/colors';
import {normalize} from '../utils/scale';
import {CheckoutButton} from '../components/buttons';

const ListHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>My Cart</Text>
    </View>
  );
};

export const Cart = () => {
  return (
    <Container>
      <FlatList
        data={Products}
        numColumns={2}
        ListHeaderComponent={<ListHeader />}
        renderItem={({item: {image, ...rest}, index}) => (
          <GroceryItem {...rest} index={index} image={image} />
        )}
      />

      <CheckoutButton label="Go to Checkout" />
    </Container>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    borderBottomWidth: 2,
    padding: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: COLORS.BORDER,
  },
  headerTitle: {
    fontSize: normalize(22),
    fontWeight: 'bold',
    color: COLORS.PRIMARY_BLACK,
  },
});
