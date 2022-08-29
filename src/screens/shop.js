import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Products} from '../items';

import {GroceryItem} from '../components/cards';

import {Container} from '../components/containers';
import {SearchBar} from '../components/searchBar';

export const Shop = () => {
  const [currencies, setCurrencies] = useState([]);
  // useEffect(() => {
  //   getCurrencies(), [];
  // });
  const getCurrencies = () => {
    var myHeaders = new Headers();
    myHeaders.append('apikey', 'inf1I1TFqkWcBbqKGAvuYCZE73mYsM8A');

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders,
    };

    fetch('https://api.apilayer.com/currency_data/list', requestOptions)
      .then(response => response.text())
      .then(result => setCurrencies([result]))
      .catch(error => console.log('error', error));
  };

  return (
    <Container customStyles={styles.container}>
      <SearchBar currencies={currencies} />
      <FlatList
        data={Products}
        numColumns={2}
        contentContainerStyle={styles.productsList}
        renderItem={({item: {image, ...rest}, index}) => (
          <GroceryItem {...rest} index={index} image={image} />
        )}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {paddingHorizontal: '3%'},
  productsList: {paddingBottom: '3%'},
});
