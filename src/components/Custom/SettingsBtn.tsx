import { View, Text, TouchableOpacity, Image, ViewStyle, ImageStyle } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { icons } from '../../assets/icons/icons';

interface props{
    iconColor?: string;
    iconStyle?: ImageStyle;
    style?: ViewStyle;
}
const SettingsBtn = ({iconColor,iconStyle,style}:props) => {
    const navigation:any=useNavigation();
  return (
  <TouchableOpacity style={[{
    position:'absolute',
    right:0,
    top:10,
  },style]} onPress={()=>navigation.navigate('Settings')}>
    <Image source={icons.setting} style={[{width:22,height:22,
    resizeMode:'contain',tintColor:iconColor || 'black'},iconStyle]} />
  </TouchableOpacity>
  )
}

export default SettingsBtn