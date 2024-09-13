import React, { useState } from 'react';
  import { Image, StyleSheet, Text, View } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
import { colors } from '../../globals/Colors';
import { icons } from '../../assets/icons/icons'; 
import { globalStyles } from '../../globals/globalStyles';

  const dummy = [
    { label: 'University of London', id: '1' },
    { label: 'University Florida', id: '2' },
    { label: 'Stanford University', id: '3' },
    { label: 'Item 4', id: '4' },
    { label: 'Item 5', id: '5' },
    { label: 'Item 6', id: '6' },
    { label: 'Item 7', id: '7' },
    { label: 'Item 8', id: '8' },
  ];
interface Props{
  iconLeft?:any;
  iconRight?:any;
  onSelect?:any;
  label?:string;
  data?:{
    label: string;
    value: string;
}[];

}
  const DropdownComponent = ({data,iconLeft,label,iconRight,onSelect}:Props) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    
    return (
      <View style={styles.container}>
      <Dropdown
        style={[globalStyles.input,{marginLeft:'5%'}, isFocus && { borderColor: colors.primary }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data || dummy}
        search
        maxHeight={300}
        labelField="label"
        valueField="id"
        renderRightIcon={() => (
          <Image
            style={styles.rightIcon}
            source={
              isFocus
                ? icons.down
                : icons.next
            }
          />
        )}
        renderLeftIcon={() => (
          <Image style={styles.iconStyle} source={iconLeft || icons.google} />
        )}
        placeholder={!isFocus ? label || 'Please select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item:any) => {
          setValue(item.value);
          setIsFocus(false);
          if (onSelect) {
            onSelect(item); // Call the onSelect callback with the selected item
          }
        }}
      />
    </View>
    );
  };

  export default DropdownComponent;

  const styles = StyleSheet.create({
    container: {
      marginVertical:'2%',
      width:'100%',
    },
    dropdown: {
      height: 50,
      borderRadius: 10,
      paddingHorizontal: 8,
      width:'90%',
      marginLeft:'5%',
    },
    rightIcon:{
   width:15,
   height:15,
   marginRight:'2%',
   tintColor:colors.darkText
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
      marginRight:'2%',
      tintColor:colors.borderGreen,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });