import React, { useState } from 'react';
import { View, TextInput, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Custom/header';
import CustomText from '../../components/Custom/CustomText';
import Icon from 'react-native-vector-icons/FontAwesome';
import { chooseeFile } from '../../globals/utils';
import { useAppSelector } from '../../store/hooks';
import { colors } from '../../globals/Colors';
import Comments from '../../components/Custom/Comments';

function Yourcommunity() {
  const navigation = useNavigation();
  const [postt, setPost] = useState<any>(null);
  const { profileData } = useAppSelector((state: any) => state.dashboardData);
  const commentsData = [
    {
      image: require('../../assets/posts/cinema.jpg'), 
      name: 'Muhammad Ali',
      time: '2 hours ago',
      comment: 'This is a comment',
      replies: [
        {          image: require('../../assets/posts/cinema.jpg'),
        
        }
      ],
    },
    {
      image: require('../../assets/posts/dog.jpg'),
      name: 'Sultan Khan',
      time: '1 hour ago',
      comment: 'Another comment',
      replies: [
        {
          image: require('../../assets/posts/mountain.jpg'),
        },
        {          image: require('../../assets/posts/cinema.jpg'),
        }
      ],
    },
  ];  

  const uploadPicture = async () => {
    try {
      const res = await chooseeFile();
      if (res && res.length > 0) {
        const pics = res.map((item) => ({
          name: item.fileName,
          type: item.type ?? 'image/jpeg',
          uri: item.uri,
        }));
        setPost(pics);
        navigation.navigate('createpost', { images: pics });
      }
    } catch (error) {
      console.error("Error uploading pictures: ", error);
    }
  };

  const leftIcon = { name: 'arrow-left', size: 24, color: 'blue' };
  const rightIcons = [
    { name: 'bars', size: 24, color: colors.backgroundColor },
  ];

  return (
    <View style={styles.container}>
      <Header leftIcon={leftIcon} rightIcons={rightIcons} />
      <ScrollView style={{ maxHeight: '100%' }}>
        <Image style={styles.image} source={require('../../assets/cambridge.jpeg')} />
        <CustomText style={styles.groupName}>Cambridge Group</CustomText>
        <CustomText style={styles.groupInfo}>Public group by Someone</CustomText>
        <View style={styles.membersContainer}>
          <CustomText style={styles.totmem}>70k</CustomText>
          <CustomText style={styles.members}>Members</CustomText>
        </View>
        <TouchableOpacity style={styles.joinButton}>
          <CustomText style={styles.joinButtonText}>Join Community</CustomText>
        </TouchableOpacity>
        <View style={{ height: 5, width: "100%", backgroundColor: "gray" }}></View>
      
        <View style={{ height: 80 }}>
          <View style={styles.centerview}>
            <Image
              source={require('../../assets/cambridge.jpeg')}
              style={styles.centerimg}
            />
            <TextInput
              style={styles.ceninput}
              placeholder="Type something..."
              placeholderTextColor="#666"
            />
            <TouchableOpacity onPress={uploadPicture}>
              <Icon name="image" size={24} color="#666" style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          </View>
        </View>
    
        <View style={{ height: 5, width: "100%", backgroundColor: "gray" }}></View>
        
        <Comments comment={commentsData} />
      </ScrollView>
    </View>
  );
}

export default Yourcommunity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ceninput: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  centerview: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    paddingHorizontal: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
  },
  centerimg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  image: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
  },
  groupName: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 14,
  },
  groupInfo: {
    fontWeight: 'bold',
    marginVertical: -2,
    marginLeft: 15,
    color: 'black',
    fontSize: 14,
    top: -1,
  },
  membersContainer: {
    flexDirection: 'row',
    marginLeft: 15,
  },
  totmem: {
    fontWeight: 'bold',
    color: 'black',
  },
  members: {
    marginLeft: 5,
  },
  joinButton: {
    backgroundColor: '#2eee8e',
    height: 45,
    width: '60%',
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  joinButtonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '700',
  },
});
