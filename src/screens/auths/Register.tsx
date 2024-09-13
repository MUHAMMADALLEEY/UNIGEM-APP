import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import CustomButton from '../../components/Custom/CustomButton';
import CustomText from '../../components/Custom/CustomText';
import { globalStyles } from '../../globals/globalStyles';
import { authStyles } from './authStyles';
import { icons } from '../../assets/icons/icons';
import { matchPasswords, validateField } from '../../globals/utils';
import { UniversityState, UserCredentials } from '../../types/types';
import DropdownComponent from '../../components/Custom/DropdownComponent';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { signupUser } from '../../store/Auths/asyncThunk';
import Loader from '../../components/loader/Loader';
const Register = ({ navigation }: any) => {
  const dispatch=useAppDispatch();
  const {signupData}=useAppSelector((state:any)=>state.authData);
   const [formData,setFormData]=useState<UserCredentials>({
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
    university:{label:'',id:''},
   })
  const signUp = async () => {
    if(validateField('name',formData.name)===false || validateField('email',formData.email)===false
     || validateField('password',formData.password)===false
     || validateField('university',formData.university?.label)===false || matchPasswords(formData.password,formData.confirmPassword)===false ){
     return;
     }
     const { confirmPassword, ...newData } = formData;
     dispatch(signupUser(newData))
  }

  return (
    <ScrollView contentContainerStyle={{paddingBottom:30}} showsVerticalScrollIndicator={false}>
      <View style={styles.viiew}>
        <Loader size={75} loading={signupData.loading} />
        <View style={{marginTop:'20%'}}>
          <Image style={styles.imgg} source={require('../../assets/uniGemLogo.png')} />
        </View>
        <View style={authStyles.formContainer}>
          <TextInput
            placeholder='Enter Your Full Name'
            style={globalStyles.input}
            onChangeText={(text) => setFormData({...formData,name:text })}
          />
          <TextInput
            placeholder='Enter Your Email'
            style={globalStyles.input}
            onChangeText={ (text) => setFormData({...formData,email:text })}
          />
          <TextInput
            placeholder='Enter Your Password'
            secureTextEntry
            style={globalStyles.input}
            onChangeText={(text) => setFormData({...formData,password:text })}
          />
          <TextInput
            placeholder='Confirm Your Password'
            secureTextEntry
            style={globalStyles.input}
            onChangeText={(text) => setFormData({...formData,confirmPassword:text })}
          />
         <DropdownComponent iconLeft={icons.university} label='Please Choose Your University' onSelect={(item:UniversityState)=>setFormData({...formData,university:item})} />
        </View>
        <View style={[authStyles.lowerBtns,{marginTop:'6%'}]}>
         <CustomButton title='Register' onPress={signUp} />
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <CustomText style={styles.Customt}>Already have an account? <CustomText style={{ color: 'blue' }}>SignIn</CustomText> </CustomText>
          </TouchableOpacity>
        <View style={styles.view2}>
          <TouchableOpacity style={styles.topac}>
            <Image source={icons.google} style={{ height: 25, width: 25 }} />
            <CustomText style={styles.custteext}>Signup With Google</CustomText>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  formContainer: { flexDirection: 'column', width: '100%', marginTop: '5%' },
  lowerBtns:{ flexDirection: 'column',
    width: '100%', marginTop: '10%',
    gap:15,
     alignItems: 'center',justifyContent:'center' 
    },
    viiew:{
      alignItems: 'center', justifyContent: 'center', flex: 1
    },
    imgg:{
      height: 180, width: 180, borderRadius: 50 
    },Customt:{
      fontSize: 18, fontFamily: 'Roboto-Light', color: 'black'
    },view2:{
      width: '90%', flexDirection: 'column', alignItems: 'center'
    },topac:{
width: '100%', borderRadius: 10, flexDirection: 'row', alignItems: 'center', backgroundColor: '#4385f5', padding: 15, justifyContent: 'center'
    },
    custteext:{
      fontSize: 20, color: 'white', marginLeft: 10, fontFamily: 'Roboto-Light' 
    }

});
export default Register
