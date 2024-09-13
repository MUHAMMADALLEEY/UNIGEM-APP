import { View, Text, ActivityIndicator, Image, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../globals/Colors';
import { screenHeight, screenWidth } from '../../globals/utils';
import { images } from '../../assets/images';

interface Props{
    size?: 'small' | 'large' | number;
    color?: string;
    loading?: boolean;
}
const Loader = ({size,color,loading}:Props) => {
 return loading===true ?  ( 
    <View style={styles.view}>
        <ActivityIndicator style={{position:'absolute'}} color={color || colors.primary} size={size || 75}    />
      <Image source={images.logo} style={styles.img} />
    </View>
  ): <></>
} 

export default Loader
const styles=StyleSheet.create({
view:{
  flex:1,opacity:0.6,zIndex:59,backgroundColor:'#383d3a5c',height:'100%',width:screenWidth, alignItems:'center',justifyContent:'center',position:'absolute'
},
img:{
  height:55,width:55,borderRadius:50
}
})