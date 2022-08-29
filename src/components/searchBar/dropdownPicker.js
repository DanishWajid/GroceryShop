import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';

export const DropdownPicker = ({items = [{label: 'USD', value: 'usd'}]}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('usd');
  // const [items, setItems] = useState([
  //   {label: 'USD', value: 'usd'},
  //   {label: 'Apple', value: 'apple'},
  //   {label: 'Banana', value: 'banana'},
  // ]);
  console.log('items', items);
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      containerStyle={styles.dropdownContainer}
      style={styles.dropdown}
    />
  );
};
