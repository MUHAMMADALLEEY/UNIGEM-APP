import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import { colors } from '../../globals/Colors';

const universities = [
  { name: 'Harvard University', location: 'Cambridge, Massachusetts', image: require('../../assets/cambridge.jpeg') },
  { name: 'Stanford University', location: 'Stanford, California', image: require('../../assets/cambridge.jpeg') },
  { name: 'MIT', location: 'Cambridge, Massachusetts', image: require('../../assets/cambridge.jpeg') },
  { name: 'University of California, Berkeley', location: 'Berkeley, California', image: require('../../assets/cambridge.jpeg') },
  { name: 'Columbia University', location: 'New York, New York', image: require('../../assets/cambridge.jpeg') },
  { name: 'University of Oxford', location: 'Oxford, England', image: require('../../assets/cambridge.jpeg') },
  { name: 'University of Cambridge', location: 'Cambridge, England', image: require('../../assets/cambridge.jpeg') },
  { name: 'Princeton University', location: 'Princeton, New Jersey', image: require('../../assets/cambridge.jpeg') },
  { name: 'Yale University', location: 'New Haven, Connecticut', image: require('../../assets/cambridge.jpeg') },
  { name: 'California Institute of Technology', location: 'Pasadena, California', image: require('../../assets/cambridge.jpeg') },
];

const SearchUniversity = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Discover Universities</Text>
        <TouchableOpacity style={styles.headerIcon}>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <View style={styles.searchIcon}>
        </View>
        <TextInput
          
          style={styles.searchInput}
          placeholder="Search Universities"
          placeholderTextColor="#4e7297"
        />
      </View>
      <ScrollView style={{ width: '100%',marginBottom:20 }}>
        {universities.map((university, index) => (
          <View key={index} style={styles.universityCard}>
            <Image style={styles.universityImage} source={university.image}></Image>
            <View style={styles.universityInfo}>
              <Text style={styles.universityName}>{university.name}</Text>
              <Text style={styles.universityLocation}>{university.location}</Text>
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
    padding: 20,
    backgroundColor: colors.backgroundColor,
  },
  imagee:{
    tintColor:'white',height: 20, width: 20 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    // backgroundColor: color,
  },
  headerTitle: {
    flex: 1,
    
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  headerIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    tintColor:'white',
  },
  searchBarContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    right:12
  },
  searchIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    
  },
  searchInput: {
    flex: 1,
    padding: 8,
    borderRadius: 12,
    marginLeft: 5,
    borderColor: colors.primary,
    borderWidth: 1,
    color:'white',
  },
  universityCard: {
    // backgroundColor: colors.secondary,
    borderRadius: 20,
    padding: 10,
    marginBottom: 15,
  },
  universityImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  universityInfo: {
    paddingTop: 10,
  },
  universityName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  universityLocation: {
    color: 'green',
    fontSize: 18,
  },
});

export default SearchUniversity;
