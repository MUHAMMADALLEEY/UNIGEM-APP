import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import {Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '@reduxjs/toolkit/query';
import { loginUser } from '../../store/Auths/asyncThunk';
import CustomText from '../../components/Custom/CustomText';
import CustomButton from '../../components/Custom/CustomButton';
import { globalStyles } from '../../globals/globalStyles';
import { Shadow } from 'react-native-shadow-2';
import { icons } from '../../assets/icons/icons';
import { validateField } from '../../globals/utils';
import Loader from '../../components/loader/Loader';
const Login = ({navigation}:any) => {
  navigation=useNavigation();
  const dispatch=useAppDispatch();
  const {authData} = useAppSelector((state: any) => state.authData);
  const [formData,setFormData]=useState({
    email:'',
    password:'',
  })
  const onLogin =async () => {
    if(validateField('email',formData.email)===false || validateField('password',formData.password)===false){
     return;
    }
    dispatch(loginUser({email: formData.email, password:formData.password}));
  }
  return (
    <View style={styles.vieww}>
      <Loader size={75} loading={authData.loading} />
      <View>
        <Image style={styles.immg} source={require('../../assets/uniGemLogo.png')} />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          placeholder='Enter Your Email'
          style={globalStyles.input}
          onChangeText={(text) => setFormData({...formData,email:text })}
        />
        <TextInput
          placeholder='Enter Your Password'
          secureTextEntry
          style={globalStyles.input}
          onChangeText={(text) => setFormData({...formData,password:text })}
        />
          <CustomText style={styles.custmt}>
            Forgot Password?
          </CustomText>
        
      </View>
      <View style={styles.lowerBtns}>
         <CustomButton title='Login' onPress={onLogin} />
          <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
            <CustomText style={styles.custmttext}>Don't have an account? <CustomText style={{ color: 'blue' }}>SignUp</CustomText> </CustomText>
          </TouchableOpacity>
      
      {/* <View style={{ width: '95%', borderBottomWidth: 1, borderColor: 'black', margin: 10 }}></View> */}
          <View style={styles.viiew}>
            <TouchableOpacity style={styles.touchopac}>
              <Image source={icons.google} style={{ height: 30, width: 30 }} />
              <CustomText style={styles.ctext}>Sign in With Google</CustomText>
            </TouchableOpacity>
          </View>
          </View>
    </View>
  )
}
export default Login

const styles = StyleSheet.create({
  formContainer: { flexDirection: 'column',gap:15,
     width: '100%', marginTop: '5%',
     alignItems: 'center'  ,
    },
    lowerBtns:{ flexDirection: 'column',
       width: '100%', marginTop: '10%',
       gap:15,
        alignItems: 'center',justifyContent:'center' 
      },
vieww:{
  alignItems: 'center', justifyContent: 'center', flex: 1
},
immg:{
  height: 180, width: 180, borderRadius: 50
},
custmt:{
  textAlign: 'center', fontSize: 18, fontFamily: 'Roboto-Light', color: 'black'
},custmttext:{
   fontSize: 18, fontFamily: 'Roboto-Light', color: 'black'
},
viiew:{
  width: '90%',flexDirection: 'column', alignItems: 'center' 
},
touchopac:{
  width:'100%',borderRadius: 10,flexDirection:'row', alignItems: 'center', backgroundColor: '#4385f5', padding: 15,justifyContent:'center' 
},ctext:{
  fontSize: 20, color: 'white', marginLeft: 20, fontFamily: 'Roboto-Light'
}
});