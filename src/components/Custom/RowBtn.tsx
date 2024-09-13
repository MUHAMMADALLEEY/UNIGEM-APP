import { View, Text, TouchableOpacity, GestureResponderEvent, ViewStyle, Image, TextStyle } from 'react-native'
import React from 'react'
import { globalStyles } from '../../globals/globalStyles';
import CustomText from './CustomText';
import { icons } from '../../assets/icons/icons';

interface Props{
    title: string;
    onPress?: ((e: GestureResponderEvent) => void) | undefined
    style?:ViewStyle;
    icon?:any;
    textStyle?:TextStyle | undefined;
}
const RowBtn = ({title,onPress,style,icon=null,textStyle={}}:Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[style,{padding:5,
       flexDirection:'row',alignItems:'center',gap:5, marginVertical:'1.5%'
    }]}> 
        <Image source={icons.next} style={{width:15,height:15,resizeMode:'contain'}} />
        <CustomText style={textStyle} h3>{title}</CustomText>
        {
            icon!==null &&
        <Image source={icon} style={{width:20,height:20,resizeMode:'contain'}} />
        }
    </TouchableOpacity>
  )
}

export default RowBtn