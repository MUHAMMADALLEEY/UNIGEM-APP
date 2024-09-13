import { View, Text, TouchableOpacity, GestureResponderEvent, ViewStyle, StyleSheet } from 'react-native'
import React from 'react'
import CustomText from './CustomText'

interface Props{
    title:string;
    style?:ViewStyle;
    onPress?: ((e: GestureResponderEvent) => void) | undefined
    outline?:boolean; 
    disabled?:boolean;
  }
  
  const CustomButton = ({title,style,onPress,disabled,outline=false}:Props) => {
   return (
    <TouchableOpacity disabled={disabled}  style={[styles.btn,style]} onPress={onPress}>
          <CustomText style={{ fontSize: 20, color: 'black' }}>{title}</CustomText>
        </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  btn:{ 
    borderRadius: 10, alignItems: 'center',
     width: '90%', backgroundColor: '#2eee8e',
      padding: 15
    }
})