import React from 'react';
import {View, Text, Image} from 'react-native';

import {SmallButton} from '../buttons';
import styles from './styles';

export const GroceryItem = ({index, id, title, quantity, price, image}) => {
  return (
    <View key={id} style={styles.groceryItemContainer(index % 2 === 0)}>
      <Image style={styles.groceryItemImage} source={image} />
      <View style={styles.descriptionContainer}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.groceryItemTitle}>
          {title}
        </Text>
        <Text style={styles.groceryItemQuantity}>{quantity}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>${price}</Text>
          <SmallButton />
        </View>
      </View>
    </View>
  );
};
