import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { globalStyles } from '../../globals/globalStyles'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import CustomText from '../../components/Custom/CustomText'
import RowBtn from '../../components/Custom/RowBtn'
// import { logOut } from '../../store/Auths/slice'

const Settings = ({navigation}:any) => {
    const { profileData } = useAppSelector((state: any) => state.dashboardData);
    const user=profileData?.response?.user;
    const dispatch=useAppDispatch();

    const onLogout = async() => {
    //   dispatch(logOut());
    }
  return (
    <View style={styles.container}>
            <CustomText h2>Settings</CustomText>
            <ScrollView contentContainerStyle={{marginTop:'3%'}} showsVerticalScrollIndicator={false}>
             <RowBtn title='Privacy Ploicy' />
             <RowBtn onPress={onLogout} title='Logout' />
             <RowBtn title='Delete Account' textStyle={{color:'red'}} />
            </ScrollView>
            <View style={{position:'absolute',bottom:20,width:'100%',alignItems:'center' }}>
           <CustomText  bold>&#169; All rights reserved by UniGem</CustomText>
            </View>
    </View>
  )
}

export default Settings

const styles=StyleSheet.create({
    container:{
        flex: 1,
        padding:10,
    }
})