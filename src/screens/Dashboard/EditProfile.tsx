import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {colors} from '../../globals/Colors';
import {globalStyles} from '../../globals/globalStyles';
import CustomButton from '../../components/Custom/CustomButton';
import {chooseFile, validateField} from '../../globals/utils';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {editProfile} from '../../store/Dashboard/asynThunk';
import firestore from '@react-native-firebase/firestore';
import Loader from '../../components/loader/Loader';

const EditProfile = () => {
  const [profilePic, setProfilePic] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFileUploading, setIsFileUploading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    email: '',
    university: '',
  });

  const dispatch = useAppDispatch();
  const {profileData} = useAppSelector((state: any) => state.dashboardData);
  const user = profileData?.response;

  const handleChange = (name: string, value: string) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const uploadPicture = async () => {
    setIsFileUploading(true);
    try {
      await chooseFile().then((res: any) => {
        const pic = {
          name: res[0]?.fileName,
          type: res[0]?.type ?? 'image/jpeg',
          uri: res[0]?.uri,
        };
        setProfilePic(pic);
      });
    } catch (error) {
      console.error("Error uploading picture: ", error);
    } finally {
      setIsFileUploading(false);
    }
  };

  const validateFields = (fields) => {
    return fields.every(({ key, value }) => validateField(key, value));
  };
  
  const editProfileData = async () => {
    const fieldsToValidate = [
      { key: 'name', value: formData.name },
      { key: 'city', value: formData.city },
      { key: 'email', value: formData.email },
      { key: 'university', value: formData.university }
    ];

    const areFieldsValid = validateFields(fieldsToValidate);
  
    if (!areFieldsValid) {
      console.log('Please fill in all required fields correctly.');
      return;
    }
  
    setIsLoading(true); 
  
    try {
      const profileRef = firestore().collection('users').doc(profileData.response?.uid);
  
      await dispatch(
        editProfile({
          data: {
            ...formData,
            profilePic,
          },
          ref: profileRef,
        }),
      );
      console.log('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile: ', error);
    } finally {
      setIsLoading(false);
    }
  };
  console.log('Profile data loading:', profileData.loading);
  return (
    <View style={styles.container}>
      {(isLoading || isFileUploading) && <Loader size={75} loading={isLoading || isFileUploading} />}
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={
            profilePic
              ? {uri: profilePic.uri}
              : require('../../assets/profile.png')
          }
        />
        <Text style={styles.profileEmail}>{user?.email}</Text>
        <TouchableOpacity onPress={uploadPicture} style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
      <View style={{gap: 20}}>
        <View style={styles.infoContainer}>
          <Text style={styles.sectionTitle}>Name</Text>
          <TextInput
            style={[
              globalStyles.input,
              {width: '100%', backgroundColor: colors.lightText},
            ]}
            placeholder="Enter your name"
            value={formData.name}
            onChangeText={text => handleChange('name', text)}
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.sectionTitle}>City</Text>
          <TextInput
            style={[
              globalStyles.input,
              {width: '100%', backgroundColor: colors.lightText},
            ]}
            placeholder="Enter your city"
            value={formData.city}
            onChangeText={text => handleChange('city', text)}
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.sectionTitle}>E-mail</Text>
          <TextInput
            style={[
              globalStyles.input,
              {width: '100%', backgroundColor: colors.lightText},
            ]}
            placeholder="Enter your email"
            value={formData.email}
            onChangeText={text => handleChange('email', text)}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.sectionTitle}>University</Text>
          <TextInput
            style={[
              globalStyles.input,
              {width: '100%', backgroundColor: colors.lightText},
            ]}
            placeholder="Enter your university"
            value={formData.university}
            onChangeText={text => handleChange('university', text)}
          />
        </View>

        <CustomButton
          style={{width: '100%'}}
          title="Save"
          onPress={editProfileData}
        />
        
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    padding: 16,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileEmail: {
    color: colors.primary,
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 20,
    width: '50%',
    alignItems: 'center',
  },
  editButtonText: {
    color: colors.lightText,
    fontWeight: 'bold',
  },
  infoContainer: {},
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: colors.lightText,
  },
});

export default EditProfile;
