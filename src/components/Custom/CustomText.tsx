import { View, Text, TextStyle, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'

interface textPorps{
    children: ReactNode;
    style?:TextStyle;
    lightText?: boolean;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    bold?: boolean;

}
const CustomText = ({children,lightText,style,h1,h2,h3,h4,bold}:textPorps) => {
  return (
    <Text style={[styles.textStyle,
    h1?styles.h1:h2?styles.h2:h3?styles.h3:h4?styles.h4:{}
    ,style,lightText&&styles.lightText,
    bold&&{fontWeight:'bold'}
    ]}>
        {children}
    </Text>
  )
}

export default CustomText

const styles = StyleSheet.create({
  h1:{
    fontSize:28,
  },
  h2:{
    fontSize:24,
  },
  h3:{
    fontSize:20,
  },
  h4:{
    fontSize:18,
  },
  lightText:{
    color:'#666',
  },
  textStyle:{
    fontSize:15,
    fontFamily:'Roboto-Regular',
  },
})