import React, { useEffect } from 'react';
import { View, Text, ImageBackground, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useAppDispatch, useAppSelector } from '../../store/hooks';
import { colors } from '../../globals/Colors';
import SettingsBtn from '../../components/Custom/SettingsBtn';
import firestore from '@react-native-firebase/firestore';
import { getProfile } from '../../store/Dashboard/asynThunk';
const UserProfile = () => {
  const dispatch = useAppDispatch();
  const navigation:any = useNavigation();
  const {profileData,editProfileData} = useAppSelector((state: any) => state.dashboardData);
  const user = profileData?.response;
  useEffect(() => {
    const profileRef = firestore().collection('users').doc(user?.uid);
    (dispatch(getProfile(profileRef)));
  }, [editProfileData.status]);
  console.log('users',profileData);

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity>
          <View style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>
      <SettingsBtn iconColor="#fff" style={{right:20,top:25}}  />
      <View style={styles.profileSection}>
        <View style={styles.profileContainer}>
          <Image
            style={styles.profileImage}
            source={user?.profilePic}/>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{user?.name}</Text>
            <Text style={styles.profileDetails}>Joined in {user?.date} ,{user?.university}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('EditProfile')} style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
      {/* Contact Information */}
      <Text style={styles.sectionTitle}>Contact Information</Text>
      <View style={styles.infoRow}>
        <View>
          <Text style={styles.infoLabel}>Email</Text>
          <Text style={styles.infoValue}>{user?.email}</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('EditProfile')}>
          <Image style={{ height: 20, width: 20, tintColor: colors.primary }} source={require('../../assets/edit.png')} />
        </TouchableOpacity>
      </View>
      {/* <View style={styles.infoRow}>
        <View>
          <Text style={styles.infoLabel}>Phone Number</Text>
          <Text style={styles.infoValue}>+1 (415) 123-4567</Text>
        </View>
        <TouchableOpacity>
          <Image style={{ height: 20, width: 20, tintColor: colors.primary }} source={require('../assets/edit.png')}></Image>
        </TouchableOpacity>
      </View> */}

      <View style={styles.vieeww}>
        <Text style={styles.sectionTitle}>Saved Locations</Text>
        <TouchableOpacity>
          <Text style={[styles.sectionTitle,{color:colors.primary}]}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.locationRow}>
        <View style={styles.locationIconContainer}>

          <Image style={styles.imgg} source={require('../../assets/location.png')} />
        </View>
        <Text style={styles.locationText}>San Francisco, California</Text>
      </View>
      <View style={styles.locationRow}>
        <View style={styles.locationIconContainer}>
          <Image style={styles.imgg} source={require('../../assets/location.png')} />
        </View>
        <Text style={styles.locationText}>Mountain View, California</Text>
      </View>

      <Text style={styles.sectionTitle}>Your University</Text>
      <View style={styles.educationRow}>
        <ImageBackground
          style={styles.educationImage}
          source={{ uri: 'https://cdn.usegalileo.ai/stability/9f1524de-0d48-42f0-9157-4dacaf319ed9.png' }}
          />
        <View style={styles.educationInfo}>
          <Text style={styles.educationLabel}>University of California, Berkeley</Text>
          <Text style={styles.educationDetails}>California, USA</Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  imgg: {
    height: 25, width: 25, tintColor: colors.primary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  backIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.primary,
    marginRight: 32,
  },
  profileSection: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImage: {
    alignSelf: 'flex-start',
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#ccc',
    overflow: 'hidden',
  },
  vieeww:{
flexDirection:'row',flex:1,justifyContent:'space-between',
  },
  profileInfo: {
    marginLeft: 16,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    width:250,
    color: colors.primary,
  },
  profileDetails: {
    fontSize: 14,
    color: '#489d6d',
    width:280,
  },
  editButton: {
    flex: 1,
    width: '100%',
    marginTop: 10,
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButtonText: {
    color: '#0d1c13',
    fontWeight: 'bold',
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.lightText,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    // backgroundColor: '#f8fcfa',
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.lightText,
  },
  infoValue: {
    fontSize: 14,
    color: '#489d6d',
  },
  changeButton: {
    fontSize: 14,
    fontWeight: '500',
    color: '#489d6d',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    // backgroundColor: '#f8fcfa',
  },
  locationIconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e7f4ec',
    borderRadius: 8,
  },
  locationText: {
    marginLeft: 12,
    fontSize: 16,
    color: colors.lightText,
  },
  educationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,

  },
  educationImage: {
    width: 100,
    height: 70,
    borderRadius: 8,
    backgroundColor: '#ccc',
    overflow: 'hidden',
  },
  educationInfo: {
    marginLeft: 16,
    flex: 1,
  },
  educationLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.lightText,
  },
  educationDetails: {
    fontSize: 14,
    color: colors.secondary,
  },
});
