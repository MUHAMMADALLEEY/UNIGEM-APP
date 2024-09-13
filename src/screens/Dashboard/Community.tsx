import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, Image } from 'react-native';
import { colors } from '../../globals/Colors';
import { useNavigation } from '@react-navigation/native';
const Community = () => {
  
  const communities = [
    {
      id: 1,
      name: "Hayes Valley Residents",
      members: "6.9K members",
      location: "San Francisco, CA",
      image: require("../../assets/school.png")
    },
    {
      id: 2,
      name: "University of California Students",
      members: "12.3K members",
      location: "Los Angeles, CA",
      image: require("../../assets/school.png")
      
    },
    {
      id: 3,
      name: "Stanford Alumni",
      members: "9.8K members",
      location: "Palo Alto, CA",
      image: require("../../assets/school.png")

    },
    {
      id: 4,
      name: "Harvard University Students",
      members: "15.2K members",
      location: "Cambridge, MA",
      image: require("../../assets/school.png")

    },
    {
      id: 5,
      name: "MIT Alumni",
      members: "7.1K members",
      location: "Cambridge, MA",
      image: require("../../assets/school.png")

    },
    {
      id: 6,
      name: "Yale Students",
      members: "10.4K members",
      location: "New Haven, CT",
      image: require("../../assets/school.png")

    },
    {
      id: 7,
      name: "Princeton University Alumni",
      members: "5.7K members",
      location: "Princeton, NJ",
      image: require("../../assets/school.png")

    },
    {
      id: 8,
      name: "Columbia University Students",
      members: "9.2K members",
      location: "New York, NY",
      image: require("../../assets/school.png")

    },
    {
      id: 9,
      name: "University of Chicago",
      members: "8.6K members",
      location: "Chicago, IL",
      image: require("../../assets/school.png")

    },
    {
      id: 10,
      name: "Duke University Community",
      members: "7.4K members",
      location: "Durham, NC",
      image: require("../../assets/school.png")

    }
  ];
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Discover Communities</Text>
        
      </View>

      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Communities"
          placeholderTextColor="#4e7297"
        />
      </View>

      <View style={styles.filterTabs}>
        <TouchableOpacity style={[styles.tab, styles.tabActive]}>
          
          <Text style={styles.tabTextActive}>Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab,styles.tab2Active]} onPress={()=>{
          navigation.navigate('yourcommunity');
        }}>
          
          <Text style={styles.tabText}>Your Communities</Text>
          
        </TouchableOpacity>
      </View>

      <ScrollView style={{marginBottom:70}}>
        {communities.map((community) => (
          <View key={community.id} style={styles.communityCard}>
            <Image
              source={community.image}
              style={styles.communityImage}
            />
            <View style={styles.communityDetails}>
              <Text style={styles.communityTitle}>{community.name}</Text>
              <Text style={styles.communityMembers}>{community.members}</Text>
              <Text style={styles.communityLocation}>{community.location}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.lightText,
  },
  headerIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBarContainer: {
    flexDirection: 'row',
    
  },
  searchIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e7edf3',
    padding: 8,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  searchInput: {
    flex: 1,
    padding: 8,
    borderRadius: 12,
    margin:5,
    borderColor:colors.primary,
    borderWidth:1,
    color:'white'
  },
  filterTabs: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'center',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e7edf3',
    padding: 8,
    borderRadius: 20,
    marginHorizontal: 4,
  },
  tabActive: {
    backgroundColor: colors.primary,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
  },
  tab2Active: {
    backgroundColor: "gray",
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,

  },
  tabText: {
    color: colors.lightText,
    fontSize: 14,
  },
  tabTextActive: {
    color: '#0e141b',
    fontSize: 14,
  },
  communityCard: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    // backgroundColor: '#f1f5f9',
    borderRadius: 12,
    marginBottom: 8,
  },
  communityImage: {
    width: 70,
    height: 70,
    borderRadius: 12,
    tintColor:colors.primary
  },
  communityDetails: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 16,
  },
  communityTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.lightText,
  },
  communityMembers: {
    fontSize: 14,
    color: colors.secondary,
  },
  communityLocation: {
    fontSize: 14,
    color: colors.secondary,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f1f5f9',
    borderTopWidth: 1,
    borderTopColor: '#e7edf3',
  },
  footerItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerItemActive: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e7edf3',
    borderRadius: 12,
    padding: 8,
  },
  footerText: {
    color: '#4e7297',
    fontSize: 12,
  },
  footerTextActive: {
    color: '#0e141b',
    fontSize: 12,
  },
});

export default Community;
